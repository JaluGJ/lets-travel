import React from 'react'
import style from './Database.module.css'

export default function Database() {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Database</h1>
        <p className={style.text}>The database technologies used for this project were:
          <ul>
            <li>Postgrs SQL, deployed on Heroku Postgres</li>
            <li>It was filled with REST countries api</li>
          </ul>
        </p>
      </div>
      <div className={style.images}>
        <img className={style.imageP} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481511/lets-travel/Technologies/PostgreSQL-Logo_d6eypl.png" alt="PostgresSQL" />
        <img className={style.imageH} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662481511/lets-travel/Technologies/heroku-postgres_njdpal.png" alt="Heroku Postgres" />
      </div>
    </div>
  )
}
