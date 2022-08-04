import React from "react";
import style from './Landing.module.css'
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className={style.conteiner}>
            <div>
                <span className={style.title}>Viajemos por el mundo</span>
                <Link to={`/home`}>
                    <button className={style.btn} type='button'>
                        <div>Let's travel</div>
                    </button>
                </Link>
            </div>
        </div>
    )
}