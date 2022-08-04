import React from 'react'
import { useEffect } from 'react'
import s from './SelectCountries.module.css'

export default function SelectCountries(
    { listCountries, setCountry, error, countriesSelected, allCountries,
        country, setCountriesSelected, setListCountries, setError }) {

    useEffect(() => {
        setListCountries(listCountries)
    }, [countriesSelected])

    const addHandler = (ev) => {
        ev.preventDefault()
        let buscador = listCountries.find(r => r.name === country)
        if (buscador) {
            if(countriesSelected.includes(buscador.name)){
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

    const handleDelete = (e)=>{
        let paisesQueQueda = countriesSelected.filter(pais => pais !== e)
        setCountriesSelected([...paisesQueQueda])
        
    }

    return (
        <div>
            <input
                className={s.input}
                placeholder='Search a country'
                type='search' name='countries'
                list='listaDePaises'
                value={country}
                onChange={e => setCountry(e.target.value)}
            />
            <datalist id='listaDePaises' >
                {allCountries?.map(c => {
                    return (
                        <option value={c.name}>{c.name}</option>
                    )
                })}
            </datalist>
            <button className={s.btn} name='countries' onClick={(ev) => addHandler(ev)}>Add</button>
            {/* -------------------Display de error----------- */}
            {error.countries && <p className={s.error}>{error.countries}</p>}
            {/* -----------Display de countries------------------- */}
            <div >
                {countriesSelected.map(r => {
                    return (
                        <div className={s.lista}>
                            <p>{r}</p>
                            <button onClick={(e) => {
                                e.preventDefault()
                                handleDelete(r)
                            }}>
                                X
                            </button>
                        </div>
                    )
                })}
            </div>
        </div >

    )
}
