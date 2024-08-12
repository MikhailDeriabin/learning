import { CreateMeal, Meal } from '@/types/Meal';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'

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

export async function createMeal(meal: CreateMeal) {
    //Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const slug = slugify(meal.title ?? '', { lower: true });
    //Remove cross site scripting things for security
    const instructions = xss(meal.instructions ?? '');

    const imageExtension = meal.image.name.split('.').pop();
    const imageFileName = `${slug}.${imageExtension}`;

    try {
        //Notice that u should not save images in the Next, even in public folder, 
        //because in PRODUCTION all such new dynamically added files will be ignored
        //You have to have some backend for it
        const stream = fs.createWriteStream(`public/images/${imageFileName}`);
        const bufferedArrImage = await meal.image.arrayBuffer();
        const bufferedImage = toBuffer(bufferedArrImage);
        stream.write(bufferedImage, (error) => {
            if(error)
                throw new Error('Fail save an image');
        });
        
        const mealToCreate = {
            ...meal,
            slug,
            instructions,
            image: `/images/${imageFileName}`
        }

        return db.prepare(`INSERT INTO meals 
            (title, summary, instructions, creator, creator_email, image, slug)
            VALUES (
                @title,
                @summary,
                @instructions,
                @creator,
                @creator_email,
                @image,
                @slug
            )`).run(mealToCreate);
    } catch (error) {
        console.log('error on saving an image', error);
    }
    
}

function toBuffer(arrayBuffer: ArrayBuffer) {
    const buffer = Buffer.alloc(arrayBuffer.byteLength);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
      buffer[i] = view[i];
    }
    return buffer;
  }