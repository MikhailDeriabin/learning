export type APIError = {
    code: number,
    info: {
        message?: string
    },
    message: string
}