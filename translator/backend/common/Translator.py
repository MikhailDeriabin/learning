from transformers import pipeline

__en_fi_model_name = 'Helsinki-NLP/opus-mt-en-fi'
__fi_en_model_name = 'Helsinki-NLP/opus-mt-fi-en'
__en_fi_model = pipeline("translation", model=__en_fi_model_name)
__fi_en_model = pipeline("translation", model=__fi_en_model_name)


def translate_en_to_fi(text):
    return __en_fi_model(text)[0]['translation_text']


def translate_fi_to_en(text):
    return __fi_en_model(text)[0]['translation_text']
