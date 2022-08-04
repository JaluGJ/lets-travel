import React, { useEffect, useState } from 'react';
import Cards from "../../Components/Cards/Cards"
import { useSelector, useDispatch } from 'react-redux'
import { doFilterByActivity, doFilterByContinet, getAllActivities, getAllCountries } from '../../Redux/actions';
import NavBar from '../NavBar/NavBar';
import s from './Home.module.css'
import Pagination from '../../Components/Pagination/Pagination';

export default function Home() {
    const dispatch = useDispatch()

    const { allCountries, loading, currentPage } = useSelector(state => state)
    const [cardsPerPage, setCardsPerPage] = useState(9)

    const changePageQ = () => {
        if (currentPage === 1) {
            setCardsPerPage(9)
        }
        if (currentPage > 1) {
            setCardsPerPage(10)
        }
    }
    useEffect(() => {
      dispatch(doFilterByContinet(allCountries,"any"))
      dispatch(doFilterByActivity(allCountries,"any"))
    }, [])
    

    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())
    }, [dispatch])

    useEffect(() => {
        changePageQ()
    }, [currentPage])


    return (
        <div className={s.container}>
            <div className={s.navBar}>
                <NavBar />
            </div>
            <div className={s.pagination}>
                <Pagination totalCountries={allCountries.length} cardsPerPage={cardsPerPage} />
            </div>
            {loading ?
                <img src='https://i.stack.imgur.com/hzk6C.gif' alt='cargando' />
                :
                <div className={allCountries.length ? s.cards : s.error}>{
                    allCountries.length ?
                        <Cards allCountries={allCountries} cardsPerPage={cardsPerPage} />
                        : 
                        <>
                            <img className={s.imag} src='https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif ' alt='404 not Found' />
                            <span>COUNTRIES NOT FOUND</span>
                        </>
                        
                }
                </div>
            }
        </div>
    )
}