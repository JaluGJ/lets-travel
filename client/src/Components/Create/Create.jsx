import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { activitiesCreate } from '../../Functions/ApiCall'
import dataValidator from '../../Functions/Validations'
import { getAllCountries } from '../../Redux/actions'
import Selectcountries from './SelectCountries/SelectCountries.jsx'
import s from './Create.module.css'
import imagen from '../../icons/home.png'


export default function Create() {

    const { allCountries } = useSelector(state => state)

    const dispatch = useDispatch()

    const [inputs, setInputs] = useState({})
    const [error, setError] = useState({})

    const [createButton, setCreateButton] = useState(true)

    const [countriesSelected, setCountriesSelected] = useState([])
    const [listCountries, setListCountries] = useState(allCountries)
    const [country, setCountry] = useState('')


    useEffect(() => {
        if (!allCountries.length) {
            dispatch(getAllCountries())
        }
        setListCountries([...allCountries])


    }, [dispatch, allCountries])

    useEffect(() => {
        setError(dataValidator(inputs, countriesSelected))

    }, [countriesSelected])


    const handleSubmit = (e) => {
        e.preventDefault()
        activitiesCreate({
            ...inputs,
            countries: countriesSelected
        })
        setInputs({
            ...inputs,
            name: '',
            difficulty: '',
            season: '',
            duration: '',
        })
        setCountriesSelected([])
        setCreateButton(true)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        const validador = dataValidator({
            ...inputs,
            [e.target.name]: e.target.value
        }, countriesSelected)

        setError(validador)
        if (!Object.keys(validador).length) {
            setCreateButton(false)
        }
        else {
            setCreateButton(true)
        }
    }


    const difficulty = ['Nigthmare', 'Expert', 'Hard', 'Normal', 'Easy']
    const season = ['Spring', 'Summer', 'Winter', 'Autum/Fall']
    return (

        <div className={s.bigdada}>
            <Link to='/home'>
                <img className={s.home} src={imagen} alt="home" key='butoncito' />
            </Link>
            <form className={s.container} onSubmit={e => handleSubmit(e)} onChange={e => handleChange(e)}>
                {/*----------------------------------name------------------------------------------- */}
                <div className={s.activitiName}>
                    <h2>Name of the activity</h2>
                    <input className={s.input} name='name' type='text' placeholder='Activity Name' value={inputs.name} />
                    {error.name && <p className={s.error}>{error.name}</p>}
                </div>
                {/*----------------------------------difficulty------------------------------------------- */}
                <div className={s.difficulty}>
                    <h2>Set a difficulty</h2>
                    <select className={s.input} name="difficulty" id="difficulty" value={inputs.difficulty}>
                        <option hidden>Select difficulty</option>
                        {difficulty?.map(r => {
                            return (
                                <option value={r} name={r} id={r} key={r}>{r}</option>
                            )
                        })}
                    </select>
                    {error.difficulty && <p className={s.error}>{error.difficulty}</p>}
                </div>
                {/*----------------------------------season------------------------------------------- */}
                <div className={s.season}>
                    <h2> Set the starting season</h2>
                    <select className={s.input} name="season" id="seasons" value={inputs.season}>
                        <option hidden>Choose a season</option>
                        {season.map(r => {
                            return (
                                <option value={r}>{r}</option>
                            )
                        })}
                    </select>
                    {error.season && <p className={s.error}>{error.season}</p>}
                </div>
                {/*-----------------------------------countries------------------------------------------ */}
                <div className={s.countries}>
                    <p> Chose your countries</p>
                    <Selectcountries
                        setCountry={setCountry}
                        listCountries={listCountries}
                        country={country}
                        setCountriesSelected={setCountriesSelected}
                        setListCountries={setListCountries}
                        setError={setError}
                        error={error}
                        countriesSelected={countriesSelected}
                        allCountries={allCountries}
                        key='countries'
                    />

                </div>

                {/*----------------------------------------duration------------------------------------- */}
                <div className={s.duration}>
                    <h2>Set a duration in days</h2>
                    <input className={s.input} name='duration' type='number' min="1" step='1' placeholder='A integer number of days' value={inputs.duration} />
                    {error.duration && <p className={s.error}>{error.duration}</p>}
                </div>
                {/*----------------------------------------------------------------------------- */}

                <button className={s.button} type='submit' name='create' disabled={createButton}>Crear</button>

            </form>
        </div>
    )
}
