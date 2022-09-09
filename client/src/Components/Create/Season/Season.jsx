import React from 'react'
import style from './Season.module.css'

export default function Season({ errorStyle, inputs, error, setInputs, setError }) {

  const season = ['Spring', 'Summer', 'Winter', 'Autum/Fall']

  const handleChange = e => {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h2 className={style.container}> Starting season
        <div className={style.inputCont}>
          <select className={style.input} name="season" id="seasons" onChange={e => handleChange(e)} value={inputs.season}>
            <option hidden>Choose a season</option>
            {season.map(r => {
              return (
                <option value={r} key={r}>{r}</option>
              )
            })}
          </select>
          {error.season && <p className={errorStyle}>{error.season}</p>}
        </div>
      </h2>
    </>
  )
}
