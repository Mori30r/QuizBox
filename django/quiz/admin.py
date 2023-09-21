from django.contrib import admin
from .models import Quiz, Question, QuestionOption, Submission


admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(QuestionOption)
admin.site.register(Submission)
