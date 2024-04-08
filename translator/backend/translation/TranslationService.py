from common.Translator import translate_en_to_fi, translate_fi_to_en

def translate_en_fi(text):
    if not text or not isinstance(text, str):
        return None

    return translate_en_to_fi(text)


def translate_fi_en(text):
    if not text or not isinstance(text, str):
        return None
    return translate_fi_to_en(text)
