import React from 'react';
import { useSelector } from 'react-redux';
import DetailAct from '../DetailAct/DetailAct';
import s from './Detail.module.css'
import Images from './Images/Images';


export default function Detail({ id }) {

  const { flag, name, continent, capital, subregion, area, population, activities } = useSelector(state => state?.country)


  return (
    <>
      {name?.length ?
        <div className={s.container} key={id}>

          <div className={s.top}>
            <img className={s.flag} src={flag} alt={`${name}'s flag`} />
            <div className={s.title}>
              <h1 className={name?.split(" ").length > 1 ? s.countryL : s.country} >{name}</h1>
              <h2 className={s.continent} >{continent}</h2>
            </div>
            <div className={s.details}>
              <ul>
                <li>Country code: {id}</li>
                <li>Capital: {capital}</li>
                <li>Subregion: {subregion}</li>
                <li>Size: {area}</li>
                <li>Population: {population}</li>
              </ul>
            </div>
          </div>

          <div className={s.images}>
            <Images name={name} />
          </div>

          <div className={s.activities}>
            <h3 className={s.touristActivities}>Tourist activities</h3>
            <div className={s.actividades}>
              {activities?.map(r => {
                return (
                  <DetailAct
                    id={r.id}
                    name={r.name}
                    difficulty={r.difficulty}
                    duration={r.duration}
                    season={r.season}
                    key={r.id}
                  />
                )
              })
              }
            </div>
          </div>
        </div>

        :

        <div className={s.loadingTitle}>
          <p className={s.cnf}> Searching</p>
          <img className={s.loading} src='https://res.cloudinary.com/dvzgzgzln/image/upload/v1662401262/lets-travel/392102850_EARTH_EMOJI_400px_hp5vjj.gif'/*'https://i.stack.imgur.com/hzk6C.gif'*/ alt='cargando' />
        </div>

      }
    </>
  )
}
