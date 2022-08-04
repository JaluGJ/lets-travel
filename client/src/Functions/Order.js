export const A_Z = "A_Z"
export const Z_A = "Z_A"
export const m_M = "m_M"
export const M_m = "M_m"
export const QUITAR = 'QUITAR'

export function a_z(arr) { //el array que recibiré por acá es el allCountries desordenado
    let countriesOrdered
    const arrayOrd = arr.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1
        }
        return 0
    })
    countriesOrdered = [...arrayOrd]
    return countriesOrdered
}
export function z_a(arr) { //el array que recibiré por acá es el allCountries desordenado
    let countriesOrdered
    const arrayOrd = arr.sort((a, b) => {
        if (a.name < b.name) {
            return 1;
        }
        if (a.name > b.name) {
            return -1
        }
        return 0
    })
    countriesOrdered = [...arrayOrd]
    return countriesOrdered
}
 export function Ma_me(arr) { 
    let countriesOrdered
    const arrayOrd = arr.sort((a, b) => {
        if (a.population > b.population) {
            return 1;
        }
        if (a.population < b.population) {
            return -1
        }
        return 0
    })
    countriesOrdered = [...arrayOrd]
    return countriesOrdered
}
export function me_Ma(arr) { 
    let countriesOrdered
    const arrayOrd = arr.sort((a, b) => {
        if (a.population < b.population) {
            return 1;
        }
        if (a.population > b.population) {
            return -1
        }
        return 0
    })
    countriesOrdered = [...arrayOrd]
    return countriesOrdered
} 