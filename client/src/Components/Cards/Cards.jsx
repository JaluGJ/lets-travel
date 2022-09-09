import React from "react";
import { useSelector } from "react-redux";
import Card from '../Card/Card';
import s from './Cards.module.css'

export default function Cards({ allCountries, cardsPerPage }) {

    const { currentPage } = useSelector(state => state)
    let lastIndex = (currentPage * cardsPerPage)
    let firstIndex = (lastIndex - cardsPerPage)


    const shownCountries = allCountries.slice(firstIndex, lastIndex)



    return (
        <div className={s.content}>
            {shownCountries?.map(r => (
                <Card img={r.flag} name={r.name} continent={r.continent} id={r.id} key={r.id} />
            ))}
        </div>
    )
}
