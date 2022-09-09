import React from 'react'
import { useEffect } from 'react'
import style from './SelectCountries.module.css'

export default function SelectCountries(
  { errorStyle, listCountries, setCountry, error, countriesSelected, allCountries,
    country, setCountriesSelected, setListCountries, setError }) {

  useEffect(() => {
    setListCountries(listCountries)
  }, [countriesSelected])

  const addHandler = (ev) => {
    ev.preventDefault()
    let buscador = listCountries.find(r => r.name === country)
    if (buscador) {
      if (countriesSelected.includes(buscador.name)) {
        return
      }
      setCountriesSelected([...countriesSelected, country])

      setError({
        ...error,
        country: false
      })
    }
    else {
      setError({
        ...error,
        country: true
      })
    }
    setCountry('')
  }

  const handleDelete = (e) => {
    let paisesQueQueda = countriesSelected.filter(pais => pais !== e)
    setCountriesSelected([...paisesQueQueda])

  }

  return (
    <>
      <h2 className={style.contenedor}>
        Chose countries
        <div className={style.divBtn}>
          <div className={style.inputCont}>
            <input
              className={style.input}
              placeholder='Search a country'
              type='search' name='countries'
              list='listaDePaises'
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
            <datalist id='listaDePaises' >
              {allCountries?.map(c => {
                return (
                  <option value={c.name} key={c.name} onClick={(ev) => addHandler(ev)}>{c.name}</option>
                )
              })}
            </datalist>
            {error.countries && <p className={errorStyle}>{error.countries}</p>}
          </div>
          <button className={style.btn} name='countries' onClick={(ev) => addHandler(ev)}>Add</button>
        </div>
      </h2>
      {/* -----------Display de countries------------------- */}

      <div className={style.listado} >
        {countriesSelected.map(r => {
          return (
            <div className={style.lista}>
              <button
                className={style.bton}
                onClick={(e) => {
                  e.preventDefault()
                  handleDelete(r)
                }}>
                X
              </button>
              <p>{r}</p>
            </div>
          )
        })}
      </div>
    </>

  )
}
