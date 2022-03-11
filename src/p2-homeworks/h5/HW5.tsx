import React from 'react'
import Header from './Header'
import Router from './Routes'
import {HashRouter} from "react-router-dom";
import s from "./Layout.module.css";

function HW5() {
    return (
        <div className={s.body}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <div className={s.p1}><Router/></div>
            </HashRouter>
        </div>
    )
}

export default HW5