import React from 'react'
import style from './Difficulty.module.css'

export default function Difficulty({ error, inputs, errorStyle, setInputs, setError }) {

  const difficulty = ['Nigthmare', 'Expert', 'Hard', 'Normal', 'Easy']

  const handleChange = e => {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h2 className={style.container}>Set difficulty
        <div className={style.inputCont}>
          <select className={style.input} name="difficulty" id="difficulty" onChange={e => handleChange(e)} value={inputs.difficulty}>
            <option hidden>Select difficulty</option>
            {difficulty?.map(r => {
              return (
                <option value={r} name={r} id={r} key={r}>{r}</option>
              )
            })}
          </select>
          {error.difficulty && <p className={errorStyle}>{error.difficulty}</p>}
        </div>
      </h2>
    </>
  )
}
