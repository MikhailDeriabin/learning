'use server';
import { Meal } from "@/types/Meal";

export async function saveMeal(formData: FormData){
    //Execute this function code on the server side, u can also put it on top of the file
    //It is just an example and u can put this use server in tsx files also
    'use server';

    const meal: Partial<Meal> = {
        title: formData.get('title') as string ?? '',
        image: formData.get('food-image') as string ?? '',
        summary: formData.get('summary') as string ?? '',
        creator: formData.get('name') as string ?? '',
        instructions: formData.get('instructions') as string ?? '',
        creator_email: formData.get('email') as string ?? ''
    }
}