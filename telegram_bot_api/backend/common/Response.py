import json
from .error.NotFoundError import NotFoundError


def resp(body: dict, status=200):
    if not body:
        return json.dumps(NotFoundError().to_json()), 404

    if body.get('status'):
        return json.dumps(body), body.get('status')

    return json.dumps(obj=body, ensure_ascii=False), status
