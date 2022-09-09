import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { A_Z, m_M, M_m, QUITAR, Z_A } from '../../Functions/Order'
import { orderCountries, setCurrentPage } from '../../Redux/actions'
import s from './SortButton.module.css'

export default function SortButton() {
    const dispatch = useDispatch()

    const { order, allCountries } = useSelector(state => state)

    function handleButton(e) {
        e.preventDefault()
        dispatch(orderCountries(allCountries, e.target.value))
        dispatch(setCurrentPage(1))

    }


    return (
        <div className={s.container}>
            <select className={s.select} name="Sort" id="sort" onChange={(e) => handleButton(e)} value={order}>
                {order !== QUITAR ? <option value={QUITAR}>Unsort</option> : <option>Sort</option>}
                <option value={A_Z}>Alphabetical</option>
                <option value={Z_A}>Inverse Alphabetical</option>
                <option value={m_M}>Most Populated</option>
                <option value={M_m}>Less Populated</option>
            </select>
        </div>
    )
}