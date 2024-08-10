import classes from './loading.module.css';

//This page will be shown on loading the page
export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching meals, stay tuned...</p>
}