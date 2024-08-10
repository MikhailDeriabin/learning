import { Meal } from '@/types/Meal';
import sql from 'better-sqlite3';

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