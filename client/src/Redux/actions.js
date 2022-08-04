import { CLEAR, CURRENT_PAGE, FILTER_BOLEAN, FILTER_BY_ACTIVITY, FILTER_BY_CONTINENT, 
    GET_ALL_ACTIVITIES, GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, 
    GET_COUNTRY_DETAIL, LOADING, ORDER_A_Z, ORDER_m_M, ORDER_M_m, ORDER_QUITAR, 
    ORDER_Z_A, REMOVE_FILTER, SET_FILTER_ACTIVITY, SET_FILTER_CONTINENT } from './const';
import { activitiesAll, countriesById, countriesName, generalCountries } from '../Functions/ApiCall';
import { a_z, A_Z, Ma_me, me_Ma, m_M, M_m, z_a, Z_A } from '../Functions/Order';
import { filterByActivity, filterByContinent } from '../Functions/Filter';
import { Any } from '../Components/FilterButton/FilterButton';
//------------Get actions--------------
//GAC => llamar a la Api (nuestro back) y traer todos los países. Payload serán los países
export function getAllCountries() {
    return async function (dispatch) {
        try {
            dispatch({type: LOADING, payload: true})
            const countries = await generalCountries()
            dispatch({type: LOADING, payload: false})
            return dispatch({ type: GET_ALL_COUNTRIES, payload: countries })
        } catch (error) {
            console.log(error)
        }
    }
}
//GAA => call to my apy and bring all the activities
export function getAllActivities() {
    return async function (dispatch){
        try {
            const activities = await activitiesAll()
            dispatch({type: GET_ALL_ACTIVITIES, payload: activities})
        } catch (error) {
            console.log(error)
        }
    }
    
}
//GCBY => llamar a la Api (nuestro back) y traer los paises cuyo nombre coincida. Payload será un arreglo de los paises que matchean
export function getCountriesByName(name) {
    return async function (dispatch) {
        try {
            const countriesId = await countriesName(name)
            return dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countriesId })
        } catch (error) {
            console.log(error)
            dispatch({ type: GET_COUNTRIES_BY_NAME, payload: [] })
        }
    }
}
//GCD => llamar a la api (nuestro back) y traer a un pais en especifico por medio de params con su ID
export function getCountryDetail(id) {
    return async function (dispatch) {
        try {
            const ctrById = await countriesById(id)
            return dispatch({ type: GET_COUNTRY_DETAIL, payload: ctrById }) 
        } catch (error) {
         console.log(error)   
        }
    }
}
//CD => Esto es simplement un limpiador
export function clearDetail() {
    return function (dispatch){
        dispatch({type:CLEAR, payload: []})
    }
}
//OAZ => ordenar el array de allCountries
export function orderCountries (countriesArray, param){
    return function (dispatch) {
        switch (param) {
        case A_Z:
            dispatch({type: LOADING, payload: true})
            const oaz = a_z(countriesArray) //oaz es orden a-z
            dispatch({type: LOADING, payload: false})
            return dispatch({type: ORDER_A_Z, payload: oaz, order: A_Z});
        case Z_A:
            dispatch({type: LOADING, payload: true})
            const oza = z_a(countriesArray)
            dispatch({type: LOADING, payload: false})
            return dispatch({type: ORDER_Z_A, payload: oza, order: Z_A})
        case M_m:
            dispatch({type: LOADING, payload: true})
            const mame = Ma_me(countriesArray)
            dispatch({type: LOADING, payload: false})
            return dispatch({type: ORDER_M_m, payload: mame, order: M_m})
        case m_M:
            dispatch({type: LOADING, payload: true})
            const mema = me_Ma(countriesArray)
            dispatch({type: LOADING, payload: false})
            return dispatch({type: ORDER_m_M, payload: mema, order: m_M})
        default:
            dispatch({type:FILTER_BOLEAN, payload:false})
            return dispatch({type: ORDER_QUITAR, payload: null})
    }
    }
}
//CP => current page, va a recibir la pagina actual en la que se encuentra
export function setCurrentPage(page){
    return function (dispatch){
        return dispatch({type: CURRENT_PAGE, payload: page})
    }
}
//DFBC => it will filter by continent, then di spatches a replacement for all countries
export function doFilterByContinet(countriesArray, continent){
    return function (dispatch){
        dispatch({type:SET_FILTER_CONTINENT, payload:continent})
        if (continent !== Any){
            dispatch({type:FILTER_BOLEAN , payload: true })
            const filter = filterByContinent(countriesArray, continent)
            return dispatch({type:FILTER_BY_CONTINENT, payload:filter})
        }
        return dispatch ({type:REMOVE_FILTER, payload:null})
    }
}
//DFBA => it will filter by activity, then it dispaches a replacement for allCountries.
export function doFilterByActivity(countriesArray, activity){
    return function (dispatch){
        dispatch({type:SET_FILTER_ACTIVITY, payload:activity})
        if (activity !== Any){
            dispatch({type:FILTER_BOLEAN , payload: true })
            const filter = filterByActivity(countriesArray, activity)
            return dispatch({type:FILTER_BY_ACTIVITY, payload:filter})
        }
        return dispatch ({type:REMOVE_FILTER, payload:null})
    }
}