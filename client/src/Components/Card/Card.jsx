import React from "react";
import {Link} from 'react-router-dom';
import style from './card.module.css';

export default function Card ({id, img, name, continent}){
    return (
            <div className={style.card} id={id}>
                <img className={style.cardImg} src={img} alt={`${name}'s flag`}/>
                <p className={style.cname}>{name}</p>
                <p className={style.contname}>{continent}</p>
                <Link to= {`/country/${id}`}>
                    <button className={style.cardbtn}>More about</button>
                </Link>
            </div>
    )
}