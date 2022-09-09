import React, { useEffect } from 'react'
import { useDispatch /* , useSelector */ } from 'react-redux'
import Detail from '../../Components/Detail/Detail'
import { clearDetail, getCountryDetail } from '../../Redux/actions'
import BasePage from '../BasePage/basePage'

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
        <BasePage body={<Detail id={id}/>}/>
    </>
  )
}
