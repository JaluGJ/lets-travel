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
import Activity from './Activities/Activity'
import Difficulty from './Difficulty/Difficulty'
import Season from './Season/Season'
import Duration from './Duration/Duration'
import Modal from './Modal/Modal'


export default function Create() {

  const { allCountries } = useSelector(state => state)

  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    name: '',
    difficulty: '',
    season: '',
    duration: '',
    countriesSelected: "",
  })
  const [error, setError] = useState({})

  const [createButton, setCreateButton] = useState(true)

  const [countriesSelected, setCountriesSelected] = useState([])
  const [listCountries, setListCountries] = useState(allCountries)
  const [country, setCountry] = useState('')
  const [modal, setModal] = useState({
    state:false,
    input:{
      name: '',
      difficulty: '',
      season: '',
      duration: '',
      countries: []
    }
  })


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
    setModal({...modal, state: true, input: {...inputs, countries: countriesSelected}})
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

    console.log(inputs)

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

  return (

    <>
      <form className={s.container} onSubmit={e => handleSubmit(e)} onChange={e => handleChange(e)}>
        <Activity error={error} inputs={inputs} errorStyle={s.error} setInputs={setInputs} setError={setError} />
        <Difficulty error={error} inputs={inputs} errorStyle={s.error} setInputs={setInputs} setError={setError} />
        <Season inputs={inputs} error={error} errorStyle={s.error} setInputs={setInputs} setError={setError} />
        <Selectcountries
          countriesStyle={s.countries}
          setCountry={setCountry}
          listCountries={listCountries}
          country={country}
          setCountriesSelected={setCountriesSelected}
          setListCountries={setListCountries}
          setError={setError}
          error={error}
          errorStyle={s.error}
          countriesSelected={countriesSelected}
          allCountries={allCountries}
        />
        <Duration inputs={inputs} error={error} errorStyle={s.error} setInputs={setInputs} setError={setError} />
        <button className={s.button} type='submit' name='create' hidden={createButton}>Crear</button>

      </form>
      {modal.state ? <Modal setModal={setModal} input={modal.input}/> : <></>}
    </>
  )
}
