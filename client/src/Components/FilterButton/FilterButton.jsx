import React  from 'react'
import s from './FilterButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { doFilterByActivity, doFilterByContinet, setCurrentPage } from '../../Redux/actions'



export const Any = 'Any'

export default function FilterButton() {


    const { backUpCountries, continentFilter, allActivities, activityFilter } = useSelector(state => state)


    const dispatch = useDispatch()
    const continents = []
    const activitiess = []

    allActivities.forEach(a => {
        if (activitiess.includes(a.name)) {
            return
        } else {
            return activitiess.push(a.name)
        }
    })

    backUpCountries.forEach(r => {
        if (continents.includes(r.continent)) {
            return
        } else {
            return continents.push(r.continent)
        }
    })
    const handleFilter = (e) => {
        e.preventDefault()
        if (e.target.name === 'continents') {
            dispatch(doFilterByContinet(backUpCountries, e.target.value))
        }
        if (e.target.name === 'activities') {
            dispatch(doFilterByActivity(backUpCountries, e.target.value))
        }
        dispatch(setCurrentPage(1))
    }

    return (
        <>
            <div>

                <select className={s.select} name='continents' onChange={(e) => handleFilter(e)} value={continentFilter}>
                    <option key='Any' value='Any' name='Any'>Filter by Continent</option>
                    {continents?.map(c => {
                        return (
                            <option key={c} value={c} name={c}>{c}</option>
                        )
                    })}
                </select>
            </div>
            <div>
                <select className={s.select} name='activities' onChange={(e) => handleFilter(e)} value={activityFilter}>
                    <option key='Any' value='Any' name='Any'>Filter by Activities</option>
                    {activitiess?.map(ac => {
                        return (
                            <option key={ac} value={ac} name={ac}>{ac}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

