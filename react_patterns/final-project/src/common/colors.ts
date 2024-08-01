/**
 * Enum containing different color styles, which can be found from the global color object.
 * Can be used for assembling color themes of components
 */
export enum ColorType {
    primary ='primary',
    neutral ='neutral',
    text ='text',
    success ='success',
    error ='error',
    alert ='alert',
}
export const color = {
    primary: {
        100: "#03045E",
        200: "#023E8A",
        300: "#0077B6",
        400: "#0096C7",
        500: "#00B4D8"
    },

    neutral: {
        0: "#FFFFFF",
        100: "#CED4DA",
        200: "#ADB5BD",
        300: "#6C757D",
        400: "#495057",
        500: "#343A40",
        600: "#212529"
    },

    text: {
        normal: "#000000",
        contrast: "#FFFFFF"
    },

    success: {
        100: "#D9ED92",
        200: "#B5E48C",
        300: "#99D98C"
    },

    error: {
        100: "#F8AD9D",
        200: "#F4978E",
        300: "#F08080"
    },

    alert: {
        100: "#FF9E00",
        200: "#FF9100",
        300: "#FF8500"
    }
}