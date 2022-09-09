import React from 'react'
import style from './Activity.module.css'

export default function Activity({ error, setInputs, setError, inputs, errorStyle }) {

  const handleChange = e => {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <h2 className={style.container}>Activity Name 
        <div className={style.inputCont}>
          <input
          className={style.input}
          name='name'
          type='text'
          placeholder='Activity Name'
          value={inputs.name}
          onChange={e => handleChange(e)}
        />
        {error.name && <p className={errorStyle}>{error.name}</p>}
          </div>
      </h2>
    </>
  )
}
