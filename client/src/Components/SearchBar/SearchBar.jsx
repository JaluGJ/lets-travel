import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName, setCurrentPage } from '../../Redux/actions'
import s from './SearchBar.module.css'

export default function SearchBar() {
    let [nombre, setName] = useState('')

    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getCountriesByName(nombre))
        dispatch(setCurrentPage(1))
        setName('')
    }

    
    
    return (
        <>
            <form className={s.cont} onSubmit={(e) => handleSubmit(e)}>
                <input className={s.input} type='text' value={nombre} onChange={(e) => setName(e.target.value)} placeholder='Search a Country' />
                <button className={s.btn} type='submit'><img className={s.img} src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1661289504/lets-travel/Icons/lupa_rlb5fa.png" alt="Search" /></button>
            </form>
        </>
    )
}
