import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/actions';
import s from './Pagination.module.css'


export default function Pagination({ totalCountries, cardsPerPage }) {

  const dispatch = useDispatch()

  const { currentPage } = useSelector(state => state)
  const [paginaActual, setPaginaActual] = useState(currentPage)

  const numberOfPages = Math.ceil(((totalCountries - 9) / cardsPerPage) + 1)

  const totalPageNumbers = []
  for (let i = 1; i <= numberOfPages ; i++) {
    totalPageNumbers.push(i)
  }

  useEffect(() => {
    dispatch(setCurrentPage(paginaActual))
  }, [paginaActual])
  


  /* const handleNumber = (e) => {
    dispatch(setCurrentPage(parseInt(e)))
  } */


  return (
    <div className={s.container}>
      <button
        className={s.desactivado}
        value={'<='} onClick={() => paginaActual <= 1 ? null : setPaginaActual(paginaActual - 1)}>{"<="}</button>
      <button
        className={s.desactivado}
        value={'=>'} onClick={() => paginaActual >= numberOfPages ? null : setPaginaActual(paginaActual + 1)}>{'=>'}</button>
      {totalPageNumbers.map(num => {
        return (
          <button
            className={currentPage === num ? s.activado : s.desactivado}
            key={num}
            value={num}
            onClick={() => setPaginaActual(num)}>{num}</button>
        )
      })
      }
    </div>
  )
}
