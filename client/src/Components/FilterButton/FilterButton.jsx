import React from 'react'
import s from './FilterButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { doFilterByActivity, doFilterByContinet, setCurrentPage } from '../../Redux/actions'
import { useState } from 'react'
import { filterByActivity, filterByContinent } from '../../Functions/Filter'



export const Any = 'Any'

export default function FilterButton() {


  const { backUpCountries, continentFilter, allActivities, activityFilter } = useSelector(state => state)

  const [filtered, setFiltered] = useState({
    continent: [],
    activity: []
  })
  const [time, setTime] = useState({
    first: "",
    second: "",
  })

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
    if (!filtered.continent?.length && !filtered.activity?.length) {
      if (e.target.name === 'continents') {
        dispatch(doFilterByContinet(backUpCountries, e.target.value))
        setFiltered({ ...filtered, continent: filterByContinent(backUpCountries, e.target.value) })
        setTime({ ...time, first: e.target.name })

      }
      if (e.target.name === 'activities') {
        dispatch(doFilterByActivity(backUpCountries, e.target.value))
        setFiltered({ ...filtered, activity: filterByActivity(backUpCountries, e.target.value) })
        setTime({ ...time, first: e.target.name })
      }
    }
    else {
      if (e.target.name === 'continents') {
        if (time.first === "continents") {
          if (activityFilter.toLowerCase() !== "any") {
            dispatch(doFilterByContinet(filtered.activity, e.target.value))
            if (e.target.value.toLowerCase() !== "any"){
              setFiltered({ ...filtered, continent: filterByContinent(backUpCountries, e.target.value) })
            }
            else{
              setFiltered({ ...filtered, continent: [] })
            }
          } else {
            if (e.target.value.toLowerCase() === "any") {
              dispatch(doFilterByContinet(backUpCountries, e.target.value))
              setFiltered({ ...filtered, continent: [] })
            } else {
              dispatch(doFilterByContinet(backUpCountries, e.target.value))
              setFiltered({ ...filtered, continent: filterByContinent(backUpCountries, e.target.value) })
            }
          }
        }
        if (time.first === "activities") {
          if (activityFilter.toLowerCase() !== "any"){
            dispatch(doFilterByContinet(filtered.activity, e.target.value))
            setFiltered({ ...filtered, continent: filterByContinent(backUpCountries, e.target.value) })
          }
          else{
            dispatch(doFilterByContinet(backUpCountries, e.target.value))
            setFiltered({...filtered, continent: []})
          }
        }
      }
      //------------------------------------
      if (e.target.name === 'activities') {
        if (time.first === 'activities') {
          if (continentFilter.toLowerCase() !== "any") {
            dispatch(doFilterByActivity(filtered.continent, e.target.value))
            if (e.target.value.toLowerCase() !== "any"){
              setFiltered({ ...filtered, activity: filterByActivity(backUpCountries, e.target.value) })
            }
            else{
              setFiltered({ ...filtered, activity: [] })
            }
          } else {
            if (e.target.value.toLowerCase() === "any") {
              dispatch(doFilterByActivity(backUpCountries, e.target.value))
              setFiltered({ ...filtered, activity: [] })
            } else {
              dispatch(doFilterByActivity(backUpCountries, e.target.value))
              setFiltered({ ...filtered, activity: filterByActivity(backUpCountries, e.target.value) })
            }
          }
        }
        if (time.first === "continents") {
          if (continentFilter.toLowerCase() !== "any"){
            dispatch(doFilterByActivity(filtered.continent, e.target.value))
            setFiltered({ ...filtered, activity: filterByActivity(backUpCountries, e.target.value) })
          }
          else{
            dispatch(doFilterByActivity(backUpCountries, e.target.value))
            setFiltered({...filtered, activity: []})
          }
        }
      }
    }
    dispatch(setCurrentPage(1))
    console.log(
      'activityFilter', activityFilter,
      'continentFilter', continentFilter,
      "time", time,
      "filtered", filtered)
  }

  return (
      <div className={s.container}>
        <select className={s.selectC} name='continents' onChange={(e) => handleFilter(e)} value={continentFilter}>
          <option key='Any' value='Any' name='Any'>Filter by Continent</option>
          {continents?.map(c => {
            return (
              <option key={c} value={c} name={c}>{c}</option>
            )
          })}
        </select>
        <br />
        <select className={s.selectA} name='activities' onChange={(e) => handleFilter(e)} value={activityFilter}>
          <option key='Any' value='Any' name='Any'>Filter by Activities</option>
          {activitiess?.map(ac => {
            return (
              <option key={ac} value={ac} name={ac}>{ac}</option>
            )
          })}
        </select>
      </div>
  )
}

