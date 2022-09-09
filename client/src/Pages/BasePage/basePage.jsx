import React from 'react'
import s from './basePage.module.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../Redux/actions'

export default function BasePage({ title, body }) {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(setCurrentPage(1))
    history.push('/home')
  }

  return (
    <div className={s.container}>
        <button className={s.exit} onClick={e => handleClick(e)}> X </button>
      <div className={s.body}>
        {body}
      </div>
    </div>
  )
}
