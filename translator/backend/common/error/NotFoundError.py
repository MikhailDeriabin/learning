class NotFoundError:
    def __init__(self):
        self.message = 'Data not found'
        self.code = 404

    def to_json(self):
        return {
            "message": self.message,
            "status": self.code
        }
