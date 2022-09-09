import axios from "axios"
require('dotenv').config();
const { REACT_APP_BACK_API, REACT_APP_PEXELS_API_KEY } = process.env
//----pedidos del get----
export async function generalCountries() {
  try {
    const cntr = await axios.get(`${REACT_APP_BACK_API}countries`)
    return cntr.data
  } catch (error) {
    throw error
  }
}

/* export function generalCountries(){
    const countries = axios.get(`${REACT_APP_BACK_API}/countries`)
    .then(res => res.data)
    .catch(err=> console.log(err))
    return countries
} */

export async function countriesName(name) {
  try {
    const cntr = await axios.get(`${REACT_APP_BACK_API}countries?name=${name}`)
    return cntr.data
  } catch (error) {
    throw error
  }
}

export async function countriesById(id) {
  try {
    const cntr = await axios.get(`${REACT_APP_BACK_API}countries/${id}`)
    return cntr.data
  } catch (error) {
    throw error
  }
}
export async function activitiesAll() {
  try {
    const act = await axios.get(`${REACT_APP_BACK_API}activities/`)
    return act.data
  } catch (error) {
    throw error
  }
}
export async function activitiesId(id) {
  try {
    const act = await axios.get(`${REACT_APP_BACK_API}activities?id=${id}`)
    return act.data
  } catch (error) {
    throw error
  }
}
//------envio con post----
export async function activitiesCreate(data) {
  const act = await axios.post(`${REACT_APP_BACK_API}activities`, data)
  return act
}

// TODO: -----update  (por si queda tiempo)------
// TODO: -----delete (por si queda tiempo)------
// pedidos a pexels
export async function pexels(name){
  try {
    let header = {
      headers: {Authorization: REACT_APP_PEXELS_API_KEY}
      }
    const images = await axios.get(`https://api.pexels.com/v1/search?query=${name}&per_page=5`, header)
    return images.data  
  } catch (error) {
    console.log(error)
    throw error
  }
}