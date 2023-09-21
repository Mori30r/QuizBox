from django.db import models


class Quiz(models.Model):
    name = models.CharField(max_length=50)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    duration = models.DurationField()
    eligible_students = models.ManyToManyField(
        'account.Student', blank=True, related_name='quizzes')
    course = models.ForeignKey(
        'account.Course', on_delete=models.CASCADE, related_name='quizzes')

    def __str__(self):
        return f"{self.name}  + id_quiz: {self.id}"


class Question(models.Model):
    QUESTION_TYPES = (
        ('explanatory', 'Explanatory'),
        ('test', 'Test'),
    )
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    question_type = models.CharField(max_length=12, choices=QUESTION_TYPES)
    time_limit = models.DurationField()


class QuestionOption(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)


class Submission(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    student = models.ForeignKey('account.Student', on_delete=models.CASCADE)
    submitted_at = models.DateTimeField(auto_now_add=True)
    answers = models.JSONField()
    file_upload = models.FileField(
        upload_to='submissions/', null=True, blank=True)
