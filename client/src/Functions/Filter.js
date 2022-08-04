export const filterByContinent = (allCountries, continent) => {
    let filtrau = allCountries.filter(a => a.continent.includes(continent))
    return filtrau
}
export function filterByActivity (allCountries, activity){
    let filtrao = allCountries.filter(p=>{
        let filter = p.activities.filter( (ac) => ac.name.includes(activity) )
        if(filter && filter.length > 0){
            return true;
        }
        return false
    })
    return filtrao
}