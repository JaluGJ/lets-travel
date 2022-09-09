import React from "react";
import { Link } from 'react-router-dom';
import style from './card.module.css';

export default function Card({ id, img, name, continent }) {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/country/${id}`}>
            <div style={{ backgroundImage: 'https://res.cloudinary.com/dvzgzgzln/image/upload/v1661470307/lets-travel/detail-background_z4ri7h.png' }} className={style.card} id={id}>
                <img className={style.cardImg} src={img} alt={`${name}'s flag`} />
                <div className={style.text}>
                    <p className={style.cname}>{name}</p>
                    <p className={style.contname}>{continent}</p>
                </div>
            </div>
        </Link>
    )
}