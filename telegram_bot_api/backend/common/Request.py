from functools import wraps
from flask import request
from .Response import resp
from .error.InternalError import InternalError
from .error.ValidationError import ValidationError


def validate_body(body_class):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            try:
                body = request.json
                if not body:
                    return resp(ValidationError("Body in JSON format must be provided").to_json())

                body_class_instance = body_class()
                accepted_fields = list(vars(body_class_instance).keys())
                for field in accepted_fields:
                    body_field = body.get(field)
                    if not body_field:
                        return resp(ValidationError(f"Field {field} must be provided in request body").to_json())
                    if not isinstance(body_field, type(field)):
                        return resp(ValidationError(f"Field {field} must be {type(field)} type").to_json())

                return f(*args, **kwargs)
            except:
                return resp(InternalError().to_json())

        return wrapper

    return decorator
