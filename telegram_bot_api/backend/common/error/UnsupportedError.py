class UnsupportedError:
    def __init__(self):
        self.message = 'This operation is unsupported'
        self.code = 415

    def to_json(self):
        return {
            "message": self.message,
            "status": self.code
        }
