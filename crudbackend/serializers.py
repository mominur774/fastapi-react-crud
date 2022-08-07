from models import Student
from tortoise.contrib.pydantic import pydantic_model_creator

StudentIn_Pydantic = pydantic_model_creator(
    Student,
    name="StudentIn"
)

StudentOut_Pydantic = pydantic_model_creator(
    Student,
    name="StudentOut",
    exclude=('id', 'created_at', 'updated_at',)
)
