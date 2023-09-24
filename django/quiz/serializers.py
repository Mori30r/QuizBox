from rest_framework import serializers
from .models import Quiz, Question, QuestionOption, Submission
from account.models import Student


class QuestionOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionOption
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    options = QuestionOptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = '__all__'


class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Quiz
        fields = '__all__'


class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'


class QuizInputSerializer(serializers.ModelSerializer):
    eligible_students = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Student.objects.all(),
        pk_field=serializers.IntegerField()
    )
    start_date = serializers.DateTimeField(format='iso8601')
    end_date = serializers.DateTimeField(format='iso8601')

    class Meta:
        model = Quiz
        fields = ['name', 'start_date', 'end_date', 'eligible_students', 'course']

    def create(self, validated_data):
        eligible_students_data = validated_data.pop('eligible_students')
        quiz = Quiz.objects.create(**validated_data)
        quiz.eligible_students.set(eligible_students_data)
        return quiz


class QuestionInputSerializer(serializers.Serializer):
    quiz = serializers.PrimaryKeyRelatedField(queryset=Quiz.objects.all())
    description = serializers.CharField(max_length=255)
    question_type = serializers.ChoiceField(choices=Question.QUESTION_TYPES)

    def create(self, validated_data):
        options_data = validated_data.pop('options', [])
        question = Question.objects.create(**validated_data)

        for option_data in options_data:
            QuestionOption.objects.create(question=question, **option_data)

        return question


class QuestionOptionInputSerializer(serializers.Serializer):
    question = serializers.PrimaryKeyRelatedField(
        queryset=Question.objects.all())
    text = serializers.CharField(max_length=255)
    is_correct = serializers.BooleanField(default=False)

    def create(self, validated_data):
        return QuestionOption.objects.create(**validated_data)


class SubmissionInputSerializer(serializers.Serializer):
    quiz = serializers.PrimaryKeyRelatedField(queryset=Quiz.objects.all())
    student = serializers.PrimaryKeyRelatedField(
        queryset=Student.objects.all())
    answers = serializers.JSONField()
    file_upload = serializers.FileField(allow_empty_file=True, required=False)
    submitted_at = serializers.DateTimeField(format='iso8601')

    def create(self, validated_data):
        return Submission.objects.create(**validated_data)


class SubmissionResponseSerializer(serializers.ModelSerializer):
    student = serializers.StringRelatedField()
    quiz = serializers.StringRelatedField()

    class Meta:
        model = Submission
        fields = '__all__'
