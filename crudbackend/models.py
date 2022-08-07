from tortoise.models import Model
from tortoise import fields


class Student(Model):
    name = fields.CharField(max_length=255)
    email = fields.CharField(max_length=255, unique=True)
    address = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    def __str__(self):
        return self.name
