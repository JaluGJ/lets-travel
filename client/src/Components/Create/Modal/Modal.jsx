import React from 'react'
import style from './Modal.module.css'

export default function Modal({ setModal, input }) {

  const handleClick = (e) => {
    e.preventDefault()
    setModal(false)
  }
  return (
    <div className={style.container}>
      <button className={style.button} onClick={e => handleClick(e)}> X </button>
      <div className={style.notification}>
        <h1 className={style.h1}>Creation <span className={style.span}>successful! </span> </h1>
        <h2 className={style.h2}>The creation of <span className={style.span}>{input.name}</span> was successful</h2>
        <div className={style.divText}>
          <p>And this are the features you set:</p>
          <ul>
            <li>This activity takes <span className={style.span}>{input.duration}</span> days to complete</li>
            <li>This activity starts only on <span className={style.span}>{input.season}</span></li>
            <li>This activity it has a <span className={style.span}>{input.difficulty}</span> rating of difficulty. <br /> <em>{'(Just be sure you can do it)'}</em> </li>
          </ul>
          <p> And last but not least, the countries where you con practice this activity</p>
          <ul className={style.ulp}>
            {input.countries.map(e => {
              return (
                <li className={style.span}>{e}</li>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}
