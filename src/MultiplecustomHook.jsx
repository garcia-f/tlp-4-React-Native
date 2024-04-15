import { useEffect } from "react";
import { useFetch } from "./hook/useFetch"



export const MultiplecustomHook = () => {
  
    const { data, hasHerror, isLoading } = useFetch('https://rickandmortyapi.com/api/character');

  

    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />

            { isLoading && <p>Cargando....</p> }

            {/* {console.log(data)} */}
            <h3>{ data.results.map(( item ) => <ul key={ item.id }>
                
                <li>
                    { item.name }
                </li>                
                <img src={item.image} alt="" />
                <button>Eliminar</button>
            </ul> ) }</h3>





      
        </>

    )

}
