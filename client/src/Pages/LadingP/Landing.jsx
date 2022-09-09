import React from "react";
import style from './Landing.module.css'
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ backgroundImage: `url(https://res.cloudinary.com/dvzgzgzln/image/upload/v1660012056/lets-travel/map-old-map-earth-wallpaper-preview_r5ykyy.jpg)` }} className={style.conteiner}>
      <Link to={`/home`}>
        <img src={'https://res.cloudinary.com/dvzgzgzln/image/upload/v1661262664/lets-travel/lets-travel-full2_xrpcku.png'} alt='landing' className={style.btn}/>
      </Link>
    </div>
  )
}