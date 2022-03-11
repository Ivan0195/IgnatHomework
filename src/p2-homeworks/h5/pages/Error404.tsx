import React from 'react'
import s from '../Layout.module.css'

function Error404() {
    return (
        <div className={s.error404}>
            <div>404</div>
            <div>Page not found!</div>
            <div>Maybe you did something wrong??</div>
        </div>
    )
}

export default Error404