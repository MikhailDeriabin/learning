export type NotificationT = {
    status: 'error' | 'success' | 'pending',
    title: string,
    message: string
}