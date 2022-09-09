import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/actions';
import s from './Pagination.module.css'


export default function Pagination({ paginaActual, setPaginaActual, numberOfPages }) {

  const dispatch = useDispatch()

  const { currentPage } = useSelector(state => state)

  const totalPageNumbers = []
  for (let i = 1; i <= numberOfPages; i++) {
    totalPageNumbers.push(i)
  }

  useEffect(() => {
    dispatch(setCurrentPage(paginaActual))
  }, [paginaActual])

  return (
    <div className={s.container}>
      {totalPageNumbers.map(num => {
        return (
          <span
            className={currentPage === num ? s.activado : s.desactivado}
            key={num}
            value={num}
            onClick={() => setPaginaActual(num)}>{num}</span>
        )
      })
      }
    </div>
  )
}
