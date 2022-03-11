import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Layout.module.css'

function Header() {

    const setActive=({isActive}:any) => isActive ? s.active : s.notActive

    return (
        <nav className={s.style}>
            <NavLink to={'/pre-junior'} className={setActive}>Prev-Junior </NavLink>
            <NavLink to={'/junior'} className={setActive}>Junior </NavLink>
            <NavLink to={'/junior-plus'} className={setActive}>Junior-Plus </NavLink>

        </nav>
    )
}

export default Header