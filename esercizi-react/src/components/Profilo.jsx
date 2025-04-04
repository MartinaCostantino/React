import useSRW from 'swr'
export default function Profilo(){
    const fetcher = (url) => fetch(url).then((response) => response.json())
   
    const {data, error, loading} = useSRW('https://api.github.com/users/maria', fetcher)
    if(error){
        return <p>Errore nel caricamento</p>
    } if(loading){
        return <p>Loading..</p>
    }
    console.log(data)
    return(
        <>
        <h2>Profilo</h2> 
        {data && 
        <div>
        <h2>{data.login}</h2>
        <p>{data.bio}</p>
        <img src={data.avatar_url} />
     </div>}
        
        </>
    )
}