import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

     //EL UseEffect lo usamos para que la peticion se dispare una sola vez
    //le mandamos como segundo argumento las dependencias que es un arreglo vacio, es decir, el componente se ejecutara solo cuando es renderizado
        useEffect(()=>{
            getGifs(category)
                .then(imgs => {
                    setState({
                      data: imgs,
                       loading: false
                  })
             });
    }, [category])


    return state; // el objeto


}

