import { Meal } from '@/types/Meal';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    //Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    //Simulate error returned from server
    //throw new Error('Loading meals failed');

    return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export async function getMealBySlug(slug: string) {
    //Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

export async function createMeal(meal: Partial<Meal>) {
    //Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const slug = slugify(meal.title ?? '', { lower: true });
    //Remove cross site scripting things for security
    const instructions = xss(meal.instructions ?? '');

    const imageExtension = meal.image?.split('.').pop();
    const imageFileName = `${slug}.${imageExtension}`;

    

    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}