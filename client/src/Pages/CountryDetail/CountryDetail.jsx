import React, { useEffect } from 'react'
//import { useState } from 'react'
import { useDispatch /* , useSelector */ } from 'react-redux'
import Detail from '../../Components/Detail/Detail'
import { clearDetail, getCountryDetail } from '../../Redux/actions'

export default function CountryDetail(props) {
    const id = props.match.params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountryDetail(id))
        return () => {
        dispatch(clearDetail())
        }
    }, [id])
    
    

  return (
    <>
        <Detail id= {id}/>
    </>
  )
}
