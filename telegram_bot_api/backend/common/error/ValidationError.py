class ValidationError:
    def __init__(self, message):
        self.message = message
        self.code = 400

    def to_json(self):
        return {
            "message": self.message,
            "status": self.code
        }
