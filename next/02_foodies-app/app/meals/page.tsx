import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meal/MealsGrid';
import { getMeals } from '@/apiController/meals';
import { Suspense } from 'react';

//Notice that server side components can be async
async function MealsData (){
     //Now we can just wait for the data without useEffect() etc.
    //Notice that Next also adds caching automatically
    const meals = await getMeals();
    
    return <MealsGrid meals={meals} />
}


export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals create by you
                </h1>
                <p>
                    Choose your favorite recipe and cook it
                </p>
                <p className={classes.cta}>
                    <Link href="meals/share">
                        Share your recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                {/* The Suspense is actually a react build-in component */}
                {/* The Next enhances it, so it is easier to use, u should just set the fallback  prop and that's it */}
                <Suspense fallback={<p className={classes.loading}>Fetching meals, stay tuned...</p>}>
                    <MealsData />
                </Suspense>
            </main>
        </>
    ); 
}