import { useEffect, useState } from "react"

export const useFetch = (url) => {
  
    
    

    // estado inicial
    const [state, setState] = useState({
        data: {results:[]},   // ACA CORREGI EL ERROR
        isLoading: true, 
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch()
    },[])

    const getFetch = async() => {
        const resp = await fetch(url)
        
        // sleep
         await new Promise( resolve => setTimeout(resolve, 2000) ) 


        if (!resp.ok) {
            setState({
                data:null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }
        
    
        const data =  await resp.json()
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })


        // manejo del cache

    }

    


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}
