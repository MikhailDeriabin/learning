import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Meal = {
    id: number,
    title: string,
    slug: string,
    image: string | StaticImport, 
    summary: string, 
    creator: string,
    instructions: string
}