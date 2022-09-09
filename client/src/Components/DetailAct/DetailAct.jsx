import React from 'react'
import s from './DetailAct.module.css'


export default function DetailAct({id, name , difficulty, duration, season}) {
  
  return (
        <div className={s.container} key={id}>
            <h1 className={s.title}> {name}</h1>
            <p className={s.text}>Difficulty: {difficulty}</p>
            <p className={s.text}>Duration: {duration} days</p>
            <p className={s.text}>Season: {season}</p>
        </div>
  )
}
