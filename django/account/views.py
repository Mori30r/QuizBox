from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import TeacherSerializer, StudentSerializer, EnrollmentSerializer
from .models import Student, Teacher, Enrollment, Course
from rest_framework.permissions import IsAuthenticated
from authentication.models import UserBaseQuizBox

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_account(request):
    user_data = UserBaseQuizBox.objects.get(account=request.user)
    
    if user_data.role == 'Teacher':
        teacher_serializer = TeacherSerializer(data=user_data)
        if teacher_serializer.is_valid():
            teacher_serializer.save()
            return Response({'message': 'Teacher account created successfully.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if user_data.role == 'Student':
        student_serializer = StudentSerializer(data=user_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return Response({'message': 'Student account created successfully.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_account(request):
    user_data = request.user
    
    if isinstance(user_data, UserBaseQuizBox):
        if user_data.role == 'Teacher':
            try:
                teacher_instance = Teacher.objects.get(user_quiz_box=user_data)
                teacher_serializer = TeacherSerializer(teacher_instance, data=request.data)
                if teacher_serializer.is_valid():
                    teacher_serializer.save()
                    return Response({'message': 'Teacher account updated successfully.'}, status=status.HTTP_200_OK)
                else:
                    return Response(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Teacher.DoesNotExist:
                return Response({'message': 'Teacher account not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        elif user_data.role == 'Student':
            student_instance = get_object_or_404(Student, user_quiz_box=user_data)
            student_serializer = StudentSerializer(student_instance, data=request.data)
            if student_serializer.is_valid():
                student_serializer.save()
                return Response({'message': 'Student account updated successfully.'}, status=status.HTTP_200_OK)
            else:
                return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response({'message': 'Invalid user role.'}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def enroll_student(request):
    '''
    ارسال درخواست تایید ثبت نام دانشجو برای استاد و درس انتخاب شده
    '''
    if request.method == 'POST':
        student_id = request.data['student_id']
        teacher_ids = request.data.getlist('teacher_ids')
        course_id = request.data['course_id']
        
        student = Student.objects.get(id=student_id)
        course = Course.objects.get(id=course_id)
        teachers = Teacher.objects.filter(id__in=teacher_ids)
        
        # ایجاد درخواست Enrollment جدید
        for teacher in teachers:
            enrollment = Enrollment(student=student, course=course, teacher=teacher, is_approved=False)
            enrollment.save()
        
        # پاسخ موفقیت آمیز
        message = 'دانشجو با موفقیت ثبت نام شد.'
        return Response({'message': message})
    
    # دریافت لیست استادان و ارسال آن به ویو
    teachers = Teacher.objects.all()
    serialized_teachers = [{'id': teacher.id, 'name': teacher.name} for teacher in teachers]
    return Response({'teachers': serialized_teachers})




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_student_requests(request):
    '''
    لیست درخواست های دانشجو هارو توی یک لیست به استاد نمایش میده
    '''
    teacher_id = request.query_params.get('teacher_id', None)
    course_id = request.query_params.get('course_id', None)

    enrollments = Enrollment.objects.filter(teacher_id=teacher_id, course_id=course_id)
    serialized_enrollments = [{'student_id': enrollment.student.id, 'student_name': enrollment.student.name} for enrollment in enrollments]

    return Response({'enrollments': serialized_enrollments})



@api_view(['GET', 'POST'])
def approve_student_request(request, teacher_id, course_id):
    '''
    تایید درخواست های دانشجو ها از طرف استاد با این  انجام میشود
    '''
    # دریافت استاد و درس موردنظر
    teacher = get_object_or_404(Teacher, id=teacher_id)
    course = get_object_or_404(Course, id=course_id)
    
    if request.method == 'GET':
        # درخواست‌هایی که دانشجوها برای استاد و درس مشخص ارسال کرده‌اند را بگیرید
        enrollment_requests = Enrollment.objects.filter(teacher=teacher, course=course)
        
        serializer = EnrollmentSerializer(enrollment_requests, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        enrollment_id = request.data.get('enrollment_id')
        action = request.data.get('action')
        
        # یافتن درخواست
        enrollment = get_object_or_404(Enrollment, id=enrollment_id, teacher=teacher, course=course)
        
        if action == 'approve':
            # تأیید درخواست
            enrollment.is_approved = True
            enrollment.save()
            
            # اضافه کردن دانشجو به لیست دانشجوهای مربوط
            course.students.add(enrollment.student)
            course.save()
            
            return Response({'message': 'درخواست تأیید شد.'})
        
        elif action == 'reject':
            # رد درخواست
            enrollment.is_approved = False
            enrollment.save()
            
            return Response({'message': 'درخواست رد شد.'})
        
        return Response({'message': 'درخواست نامعتبر.'})
    
    
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_approved_students(request, teacher_id):
    '''
    لیست دانشجوهایی که توسط استاد تایید شده‌اند را برمی‌گرداند.
    '''

    enrollments = Enrollment.objects.filter(teacher_id=teacher_id, is_approved=True)

    approved_students = []
    for enrollment in enrollments:
        status = 'Approved' if enrollment.is_approved else 'Rejected'
        approved_students.append({
            'course_id': enrollment.course.id,
            'student_id': enrollment.student.id,
            'teacher_id': enrollment.teacher.id,
            'status':status,
        })

    return Response({'approved_students': approved_students})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_approved_teachers_by_student(request, student_id):
    '''
    لیست استادهایی که دانشجو توسط آن‌ها تایید شده است را برمی‌گرداند.
    '''

    enrollments = Enrollment.objects.filter(student_id=student_id)

    approved_teachers = []
    for enrollment in enrollments:
        status = 'Approved' if enrollment.is_approved else 'Rejected'
        approved_teachers.append({
            'course_id': enrollment.course.id,
            'student_id': enrollment.student.id,
            'teacher_id': enrollment.teacher.id,
            'status': status
        })

    return Response({'approved_teachers': approved_teachers})