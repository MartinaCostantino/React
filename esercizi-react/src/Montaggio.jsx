import { useEffect, useRef } from "react";


export default function Montaggio(){
    const isMounted = useRef(false)
    useEffect(()=> {
        if(!isMounted.current){
            console.log("Primo Montaggio!")
            isMounted.current = true
        }else {
            console.log("altri montaggi")
         }

    }, [])


}
