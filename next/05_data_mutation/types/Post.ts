export type Post = {
    id: number,
    image: string,
    title: string,
    content: string,
    createdAt: string,
    userFirstName: string
}

export type CreatePost = {
    imageUrl: string,
    title: string,
    content: string,
    userId: number
}