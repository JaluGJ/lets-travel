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
  const [cardsPerPage, setCardsPerPage] = useState(10)
  const [paginaActual, setPaginaActual] = useState(currentPage)

  const numberOfPages = Math.ceil(((allCountries.length) / cardsPerPage))

  useEffect(() => {
    dispatch(doFilterByContinet(allCountries, "any"))
    dispatch(doFilterByActivity(allCountries, "any"))
  }, [])


  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAllActivities())
  }, [dispatch])


  return (
    <div className={s.container}>
      <div className={s.sideBar}>
        <NavBar />
      </div>
      <div className={s.cardsCont}>
        <div className={s.pagAndCard}>
          <span
            className={s.botonIzq}
            value={'<='} onClick={() => paginaActual <= 1 ? null : setPaginaActual(paginaActual - 1)} ></span>
          {loading ?
            <div className={s.error}>
              <p className={s.cnf}> Searching</p>
              <img className={s.loading} src='https://res.cloudinary.com/dvzgzgzln/image/upload/v1662401262/lets-travel/392102850_EARTH_EMOJI_400px_hp5vjj.gif'/*'https://i.stack.imgur.com/hzk6C.gif'*/ alt='cargando' />
            </div>
            :
            <div className={allCountries.length ? s.cards : s.error}>{
              allCountries.length ?
                <Cards allCountries={allCountries} cardsPerPage={cardsPerPage} />
                :
                <>
                  <p className={s.cnf} >COUNTRIES NOT FOUND</p>
                  <img className={s.imag} src='https://res.cloudinary.com/dvzgzgzln/image/upload/v1661436908/lets-travel/globe-33_hhhmtn.gif' alt='404 not Found' />
                </>

            }
            </div>
          }
          <span
            className={s.botonDer}
            value={'=>'}
            onClick={() => paginaActual >= numberOfPages ? null : setPaginaActual(paginaActual + 1)}></span>
        </div>
        <div className={s.pagination}>
          <Pagination
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            numberOfPages={numberOfPages} />
        </div>
      </div>

    </div>
  )
}