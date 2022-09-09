import React from 'react'
import style from './Duration.module.css'

export default function Duration({ errorStyle, inputs, error, setInputs, setError }) {

  const handleChange = e => {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div /*className={style.container}*/>
      <h2 className={style.container}>Set  duration
        <div className={style.inputCont}>
          <input onChange={e => handleChange(e)} className={style.input} name='duration' type='number' min="1" step='1' placeholder='Integer number' value={inputs.duration} />
          days
          {error.duration && <p className={errorStyle}>{error.duration}</p>}
        </div> 
      </h2>
    </div>
  )
}
