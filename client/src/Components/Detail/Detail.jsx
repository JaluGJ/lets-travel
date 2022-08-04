import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DetailAct from '../DetailAct/DetailAct';
import s from './Detail.module.css'
import imagen from '../../icons/home.png'


export default function Detail({ id }) {

    const { flag, name, continent, capital, subregion, area, population, activities } = useSelector(state => state?.country)


    return (
        <div className={s.container} key={id}>
            <Link to='/home'>
                <img className={s.home} src={imagen} alt="home" />
            </Link>
            <div className={s.detContainer}>
                <div className={s.bandera}>
                    <img className={s.banderados} src={flag} alt={`${name}'s flag`} />
                </div>
                <div className={s.detalles}>
                    <h1>{name}</h1>
                    <h2>Codigo de país: {id} </h2>
                    <h2>Continente: {continent}</h2>
                    <h2>Capital: {capital}</h2>
                    <h2>Subregion: {subregion}</h2>
                    <h2>Tamaño: {area}</h2>
                    <h2>Poblacion: {population}</h2>
                </div>
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
    )
}