from flask import Flask, request
from flask_cors import CORS
from common.error.UnprocessableError import UnprocessableError
from common.error.UnsupportedError import UnsupportedError
from translation.TranslationService import translate_en_fi, translate_fi_en
from translation.dto.TranslationCreateDto import TranslationCreateDto
from common.Response import resp
from common.Request import validate_body

app = Flask(__name__)
CORS(app)


@app.post('/translation')
@validate_body(TranslationCreateDto)
def translate():
    body = request.json

    if len(body.get('text')) > 200:
        return resp(UnprocessableError().to_json())

    if body.get('source') == 'en' and body.get('target') == 'fi':
        return resp({'translatedText': translate_en_fi(body.get('text'))})

    if body.get('source') == 'fi' and body.get('target') == 'en':
        return resp({'translatedText': translate_fi_en(body.get('text'))})

    return resp(UnsupportedError().to_json())


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
