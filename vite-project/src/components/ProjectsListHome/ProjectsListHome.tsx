import type { JSX } from 'react';
import style from './ProjectsListHome.module.css'
import { NavLink } from 'react-router-dom';

export default function ProjectsListHome():JSX.Element {
    return(
        <nav className={style.navigation}>
            <ul className={style.list}>
            
            <li className={style.listElement}>
            <NavLink to="counter" className={style.link}>
            Counter
            </NavLink>
            </li>

            <li className={style.listElement}>
            <NavLink to="modal" className={style.link}>
            Modal
            </NavLink>
            </li>
            
            </ul>
        </nav>
    )
}