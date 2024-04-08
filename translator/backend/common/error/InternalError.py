class InternalError:
    def __init__(self):
        self.message = 'Something went wrong on server side'
        self.code = 500

    def to_json(self):
        return {
            "message": self.message,
            "status": self.code
        }
