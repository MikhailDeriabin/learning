import { getMealBySlug } from '@/apiController/meals';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
    params: { mealId: string }
}
export default async function functionMealPage({ params }: Props){
    const meal = await getMealBySlug(params.mealId);

    //Special function, which searches for the closest not-found component
    if(!meal)
        return notFound();

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt='meal' fill/>
                </div>
                <div className={classes.headerText}>
                    <h1></h1>
                    <p className={classes.creator}>
                        by {meal.creator}
                    </p>
                    <p className={classes.summary}>
                        
                    </p>
                </div>
                Description for meal {params.mealId}
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions.replace(/\n/g, '<br/>')
                    }}
                >

                </p>
            </main>
        </>
    );
}