import React from 'react'
import style from './Backend.module.css'

export default function Backend() {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Backend-deploy</h1>
        <p className={style.text}>The Api was made with:
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Sequelize as the ORM</li>
            <li>Express</li>
            <li>Deployed on Heroku</li>
          </ul>
        </p>
      </div>
      <ul className={style.imagenes}>
        <img className={style.imageN} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481511/lets-travel/Technologies/nodejs-logo-vector_uxem00.svg" alt="Nodejs" />
        <img className={style.imageE} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481511/lets-travel/Technologies/Expressjs_g9qe1m.png" alt="ExpressJS" />
        <img className={style.imageS} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481512/lets-travel/Technologies/sequelize-1-1175002_jpebcb.webp" alt="Sequelize" />
      </ul>
      <ul className={style.imagenes}>
        <img className={style.imageT} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481512/lets-travel/Technologies/thunderclient_zlgltq.png" alt="ThunderClient" />
        <img className={style.imageH} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481511/lets-travel/Technologies/Heroku_logo.svg_o8oacd.png" alt="Heroku" />
      </ul>
    </div>
  )
}

