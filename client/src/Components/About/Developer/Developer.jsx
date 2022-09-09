import React from 'react'
import style from './Developer.module.css'

export default function Developer() {
  return (
    <div className={style.container}>
      <div className={style.imagenes}>
        <h1 className={style.title}>Developer</h1>
        <img className={style.imageH} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662491726/lets-travel/Technologies/logo-white_pm7ajr.png" alt="Henry Logo" />
        <img className={style.imageD} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1662491778/lets-travel/Technologies/IMG_20220401_012247_903_umbfjb.jpg" alt="Developer's face" />
      </div>
      <p className={style.text}>I'm a person who likes to learn and found this marvelous world
        of programming at the last stages of a chemical engineering career. <br />
        This project is the result of a intensive learning process at
        Henry, <br /> where the challenge is to build a complete and functional
        SPA <br /> from scratch
      </p>
    </div>
  )
}
