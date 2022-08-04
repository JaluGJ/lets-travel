import React from 'react'
import s from './DetailAct.module.css'

export default function DetailAct({id, name , difficulty, duration, season}) {
  return (
        <div className={s.container} key={id}>
            <span>Activity: {name}</span><br/>
            <span>Difficulty: {difficulty}</span><br/>
            <span>Duration: {duration}</span><br/>
            <span>Season: {season}</span>
        </div>
  )
}
