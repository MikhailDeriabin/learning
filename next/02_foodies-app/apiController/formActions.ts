'use server';
import { CreateMeal } from "@/types/Meal";
import { createMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function saveMeal(formData: FormData){
    //Execute this function code on the server side, u can also put it on top of the file
    //It is just an example and u can put this use server in tsx files also
    'use server';

    const meal: CreateMeal = {
        title: formData.get('title') as string ?? '',
        image: formData.get('food-image') as File,
        summary: formData.get('summary') as string ?? '',
        creator: formData.get('name') as string ?? '',
        instructions: formData.get('instructions') as string ?? '',
        creator_email: formData.get('email') as string ?? ''
    }

    await createMeal(meal);

    //Next is caching data pretty aggressively, 
    //so you have to tell to clear the cache for the pages, which have been changed
    //Here we are adding a new meal to db and after that this new meal should appear on the meals page
    //Otherwise in PRODUCTION builds Next will not update the page => new meal can not be seen
    revalidatePath('/meals');
    redirect('/meals');
}