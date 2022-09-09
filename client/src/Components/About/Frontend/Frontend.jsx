import React from 'react'
import style from './Frontend.module.css'

export default function Frontend() {
  return (
    <div className={style.container}>
    <div>
      <h1 className={style.title}>Frontend-deploy</h1>
      <p className={style.text}>The frontend of this project was made with:
        <ul>
          <li>ReactJS</li>
          <li>React Router</li>
          <li>Redux</li>
          <li>Deployed on Verecl</li>
        </ul>
      </p>
    </div>
    <ul className={style.imagenes}>
      <img className={style.imageN} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481512/lets-travel/Technologies/React_logo_wordmark_rmo9h4.png" alt="ReactJS" />
      <img className={style.imageE} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481512/lets-travel/Technologies/react-router-logo-AB5BFB638F-seeklogo.com_w1odi9.png" alt="React Router DOM" />
    </ul>
    <ul className={style.imagenes}>
      <img className={style.imageS} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481511/lets-travel/Technologies/Redux_eqbh13.png" alt="Redux" />
      <img className={style.imageT} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481512/lets-travel/Technologies/vercel-inc-logo-vector_mmpci2.png" alt="Vercel" />
    </ul>
  </div>
  )
}
