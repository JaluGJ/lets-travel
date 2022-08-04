import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { A_Z, m_M, M_m, QUITAR, Z_A } from '../../Functions/Order'
import { orderCountries, setCurrentPage } from '../../Redux/actions'
import s from './SortButton.module.css'

export default function SortButton() {
    /*antes de que se me vaya la idea: hacer un estado que cambie de true a false, siendo true cuando este ordenado de 
    forma alfabetica de "a" a la "z", y false cuando este de "z" a la "a". mi handle submit va a cambiar ese estado. va a despachar
    ese cambio de estado. 
    olvidarse de lo anterior... peeeeeeeeeero. no del todo. el estado "order" será "true" si es que se le aplica un metodo 
    de ordenamiento, y será false si se quiere sacar ese metodo de ordenamiento. 
    podría hacerse dentro de la funcion de order, que se va a traer de afuera, crear un estado momentaneo. ah, no... tengo que modificar ...
    bien, cuando order sea false, el inmutable pasará al allCountries. pero, mientras sea true, ahí aplcica la logica de 
    el tipo de orden. tendría que ser un estado momentaneo, o poría ser un nuevo arreglo que esté trabajando de fondo... pero, tener tres veces
    lo mismo, no cuatro. No puede ser. 
    pues... order podría ser null, y si es "A_Z" hacer una cosa, y si es "Z_A", hacer otra. lo mismo con el estado general de 
    "1_9" o "9_1" */

    const dispatch = useDispatch()

    const { order, allCountries, filterStatus } = useSelector(state => state)

    function handleButton(ord) {
        dispatch(orderCountries(allCountries, ord))
        dispatch(setCurrentPage(1))

    }
    
    return (
        <div className={s.container}>
            {order === null || order === M_m || order === m_M ?
                <button className={s.desact} onClick={() => handleButton(A_Z)}>By name</button>
                :
                order === A_Z ?
                    <button className={s.activ} onClick={() => handleButton(Z_A)}> {"a -> z"}</button>
                    :
                    <button className={s.activ} onClick={() => handleButton(A_Z)}> {'z -> a'} </button>
            }
            {order === null || order === A_Z || order === Z_A ?
                <button className={s.desact} onClick={() => handleButton(M_m)}>By population</button>
                :
                order === M_m ?
                    <button className={s.activ} onClick={() => handleButton(m_M)}>Descendent</button>
                    :
                    <button className={s.activ} onClick={() => handleButton(M_m)}>Ascendent</button>
            }
            {order !== null || filterStatus === true ?
                <button className={s.desact} onClick={() => handleButton(QUITAR)}>Remove sort/filter</button>
                :
                <button className={s.activ} disabled>Remove sort/filter</button>
            }
        </div>
    )
}
