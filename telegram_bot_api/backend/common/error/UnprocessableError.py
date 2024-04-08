class UnprocessableError:
    def __init__(self):
        self.message = 'API can not process that request'
        self.code = 422

    def to_json(self):
        return {
            "message": self.message,
            "status": self.code
        }
