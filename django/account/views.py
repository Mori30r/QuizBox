from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .serializers import TeacherSerializer, StudentSerializer, EnrollmentSerializer
from .models import Student, Teacher, Enrollment, Course
from rest_framework.permissions import IsAuthenticated




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_account(request):
    user = request.user

    if user.role == 'Teacher':
        teacher, created = Teacher.objects.get_or_create(user=user)

        if created:
            # Set additional attributes specific to the teacher
            teacher.teaching_experience = request.data.get('teaching_experience')
            teacher.teacher_code = request.data.get('teacher_code')
            teacher.qualification = request.data.get('qualification')
            teacher.specialization = request.data.get('specialization')
            teacher.save()

        teacher_serializer = TeacherSerializer(teacher)

        if teacher_serializer.is_valid():
            return Response({'message': 'Teacher account created successfully.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if user.role == 'Student':
        student, created = Student.objects.get_or_create(user=user)

        if created:
            # Set additional attributes specific to the student
            student.number_of_semesters = request.data.get('number_of_semesters')
            student.parent_name = request.data.get('parent_name')
            student.grade = request.data.get('grade')
            student.student_code = request.data.get('student_code')
            student.parent_phone_number = request.data.get('parent_phone_number')
            student.major = request.data.get('major')
            student.enrollment_date = request.data.get('enrollment_date')
            student.save()

        student_serializer = StudentSerializer(student)

        if student_serializer.is_valid():
            return Response({'message': 'Student account created successfully.'}, status=status.HTTP_201_CREATED)
        else:
            return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_account(request):
    user = request.user

    if user.role == 'Teacher':
        teacher, created = Teacher.objects.get_or_create(user=user)

        if not created:
            teacher_serializer = TeacherSerializer(teacher, data=request.data)

            if teacher_serializer.is_valid():
                teacher_serializer.save()
                return Response({'message': 'Teacher account updated successfully.'}, status=status.HTTP_200_OK)
            else:
                return Response(teacher_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Teacher account not found.'}, status=status.HTTP_404_NOT_FOUND)

    if user.role == 'Student':
        student, created = Student.objects.get_or_create(user=user)

        if not created:
            student_serializer = StudentSerializer(student, data=request.data)

            if student_serializer.is_valid():
                student_serializer.save()
                return Response({'message': 'Student account updated successfully.'}, status=status.HTTP_200_OK)
            else:
                return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'message': 'Student account not found.'}, status=status.HTTP_404_NOT_FOUND)

    return Response({'message': 'Invalid user role.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([])
def teacher_list(request):
    if request.method == 'GET':
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        teachers_data = serializer.data    
        return Response(teachers_data, status=status.HTTP_200_OK)
    
@api_view(['GET'])
@permission_classes([])
def teacher_details(request, teacher_id):
    teacher = get_object_or_404(Teacher, id=teacher_id)
    serializer = TeacherSerializer(teacher)
    teacher_data = serializer.data
    return Response(teacher_data, status=status.HTTP_200_OK)
    



@api_view(['GET'])
@permission_classes([])
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        students_data = serializer.data
        return Response(students_data, status=status.HTTP_200_OK)


@api_view(['GET'])
def student_detail(request, student_id):
    student = get_object_or_404(Student, id=student_id)
    serializer = StudentSerializer(student)
    student_data = serializer.data
    return Response(student_data, status=status.HTTP_200_OK)




@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def enroll_student(request):
    '''
    ارسال درخواست تایید ثبت نام دانشجو برای استاد و درس انتخاب شده
    '''
    if request.method == 'POST':
        student_id = request.data.get('student_id')
        teacher_id = request.data.get('teacher_id')
        course_id = request.data.get('course_id')
        
        try:
            student = Student.objects.get(id=student_id)
            course = Course.objects.get(id=course_id)
            teachers = Teacher.objects.filter(id=teacher_id)
            
            
            # ایجاد درخواست Enrollment جدید
            for teacher in teachers:
                enrollment = Enrollment(student=student, course=course, teacher=teacher, is_approved=False)
                enrollment.save()
            
            # پاسخ موفقیت آمیز
            message = 'دانشجو با موفقیت ثبت نام شد.'
            return Response({'message': message}, status=status.HTTP_201_CREATED)
        
        except Student.DoesNotExist:
            message = 'دانشجوی مورد نظر یافت نشد.'
            return Response({'message': message}, status=status.HTTP_404_NOT_FOUND)
        
        except Course.DoesNotExist:
            message = 'درس مورد نظر یافت نشد.'
            return Response({'message': message}, status=status.HTTP_404_NOT_FOUND)
        
        except Teacher.DoesNotExist:
            message = 'استاد(انتخاب شده) مورد نظر یافت نشد.'
            return Response({'message': message}, status=status.HTTP_404_NOT_FOUND)
    
    # دریافت لیست استادان و ارسال آن به ویو
    teachers = Teacher.objects.all()
    serialized_teachers = [{'id': teacher.id} for teacher in teachers]
    return Response({'teachers': serialized_teachers})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_student_requests(request):
    '''
    لیست درخواست های دانشجو هارو توی یک لیست به استاد نمایش میده
    '''
    teacher_id = request.data.get('teacher_id', None)
    course_id = request.data.get('course_id', None)

    enrollments = Enrollment.objects.filter(teacher_id=teacher_id, course_id=course_id)
    serialized_enrollments = [{'student_id': enrollment.student.id, 'student_name': enrollment.student.user.first_name} for enrollment in enrollments]

    return Response({'enrollments': serialized_enrollments})



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
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
    لیست استادهایی که آن دانشجو را تایید کرده است را برمی‌گرداند.
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