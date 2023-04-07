from django.db import models

class Feedback(models.Model):
    name = models.CharField(max_length=30)
    comment = models.TextField()
    photo = models.ImageField(upload_to='photos/users')

    def __str__(self):
        return self.name
