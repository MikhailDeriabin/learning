import {NavLink} from "react-router-dom";
import s from './PageNavigation.module.css';

export default function PageNavigation() {
    return(
        <header className={s.header}>
            <nav>
                <ul className={s.list}>
                    {/*The <NavLink /> component allows us to add some styles when user is on the page*/}
                    <li><NavLink to='/' className={({isActive}) => isActive ? s.active : ''}>Home</NavLink></li>
                    <li><NavLink to='/products' className={({isActive}) => isActive ? s.active : ''}>My Products</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}