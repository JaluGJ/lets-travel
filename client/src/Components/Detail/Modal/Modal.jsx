import React from 'react'
import style from './Modal.module.css'

export default function Modal({url, alt, setIsOpen}) {

  const handleClick = (e) =>{
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <>
      <button className={style.button} onClick={e=>handleClick(e)}> X </button>
      <img className={style.imagen} src={url} alt={alt} />
    </>
  )
}
