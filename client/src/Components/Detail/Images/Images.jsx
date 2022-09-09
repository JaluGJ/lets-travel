import React, { useState } from 'react'
import style from './Images.module.css'
import { pexels } from '../../../Functions/ApiCall'
import { useEffect } from 'react'
import Modal from '../Modal/Modal'

export default function Images({ name }) {

  const [images, setImages] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [imagen, setImagen] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(true)
    setImagen(e.target.src)
  }

  useEffect(async () => {
    let im = await pexels(name)
    setImages(im.photos)
  }, )

  return (
    <div className={style.container}>
      {images.map((e)=> {
        return (
           <img className={style.images} src={e.src.landscape} alt={e.alt} onClick={(e)=>handleClick(e)}/>
          //<img className={style.images} src={e.landscape} alt={e.alt} onClick={(e)=>handleClick(e)}/>
        )
      })}
      {isOpen ? 
      <div className={style.modal}>
         <Modal url={imagen} setIsOpen={setIsOpen}/> 
      </div>: <></>}
    </div>
  )
}
