import { useState } from "react"

export default function useCurrentLocation(){
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    function getLocation(){
        setLoading(true)
        try {
            navigator.geolocation.getCurrentPosition((position)=> {
                setLocation({
                    latitudine: position.coords.latitude,
                    longitudine: position.coords.longitude,
                })
            })
        } catch (error) {
            setError("errore nel recupero della posizione")
        } finally{
            setLoading(false)
        }
    }
    return { location, error, loading, getLocation };
}