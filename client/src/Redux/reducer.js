import { Any } from '../Components/FilterButton/FilterButton.jsx'
import {CLEAR, CURRENT_PAGE, FILTER_BOLEAN, FILTER_BY_ACTIVITY, FILTER_BY_CONTINENT, GET_ALL_ACTIVITIES, 
    GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_DETAIL, LOADING, ORDER_A_Z, 
    ORDER_m_M, ORDER_M_m, ORDER_QUITAR, ORDER_Z_A, REMOVE_FILTER, SET_FILTER_ACTIVITY, 
    SET_FILTER_CONTINENT} from './const.js'

const initState = {
    allCountries: [],
    backUpCountries: [],
    allActivities:[],
    country: [],
    loading: false,
    order: null,
    currentPage: 1,
    continentFilter: "Any",
    activityFilter:'Any',
    filterStatus: false
}


export default function reducer (state = initState, action){
    switch (action.type){
        //Get Countries
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: [...action.payload],
                backUpCountries: [...action.payload] // recordatorio. este es tu inmutable, verdad absoluta, pa' los filtros
            }
        case GET_ALL_ACTIVITIES:
            return{
                ...state,
                allActivities: [...action.payload]
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                allCountries: [...action.payload]
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                country: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CLEAR:
            return{
                ...state,
                country: action.payload
            }
        case ORDER_A_Z:
        case ORDER_Z_A:
        case ORDER_M_m:
        case ORDER_m_M:
            return {
                ...state,
                allCountries: [...action.payload],
                order: action.order
            }
        case ORDER_QUITAR:
            return {
                ...state,
                allCountries: [...state.backUpCountries],
                order: action.payload,
                continentFilter: "Any",
                activityFilter:'Any'
            }
        case REMOVE_FILTER:
            return{
                ...state,
                allCountries: [...state.backUpCountries]
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        case FILTER_BY_CONTINENT:
            return{
                ...state,
                allCountries: [...action.payload],
                activityFilter: Any
            }
            case FILTER_BY_ACTIVITY:
                return {
                    ...state,
                    allCountries: [...action.payload],
                    continentFilter: Any
            }
        case SET_FILTER_ACTIVITY:
            return {
                ...state,
                activityFilter: action.payload
            }
        case SET_FILTER_CONTINENT: 
        return {
            ...state,
            continentFilter: action.payload,
        }
        case FILTER_BOLEAN:
            return {
                ...state,
                filterStatus: action.payload
            }
        default: {
            return state
        }
    }
}
