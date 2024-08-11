import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Meal = {
    id: number,
    title: string,
    slug: string,
    image: string, 
    summary: string, 
    creator: string,
    instructions: string,
    creator_email: string
}