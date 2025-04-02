import { useState } from "react";
import "./chat.css"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function Chat(){
   const [inviato, setInviato]= useState("");
   const[messaggiInviati, setMessaggiInviati] = useState([])
   let [risposte, setRisposte] = useState([])
   let [indiceRisposta, setIndiceRisposta] = useState(0)
   
   const {data} = useSWR("https://mocki.io/v1/52978e6f-8d2b-4d88-9f8d-9701b0175d34", fetcher)
   console.log(data)
   
   function handleInvia(event) {
      event.preventDefault()
      if (!inviato.trim()) return;
      setInviato("")
      setMessaggiInviati([...messaggiInviati, inviato])
      setTimeout(()=>{
         setIndiceRisposta(indiceRisposta > data.responses.length ? indiceRisposta = 0 : indiceRisposta + 1 ) 
          if(data  && data.responses){
            const ricevuto =  data.responses[indiceRisposta];
            setRisposte(risposta => [...risposta, ricevuto]);
          }

      },2000)

     } 

   return(
    <>
       <div className="phone">
        <div className="headerChat">
          <div className="containerImg">
          <img className="utenteImg" src="https://img.freepik.com/vettori-gratuito/circolo-blu-con-utente-bianco_78370-4707.jpg" alt="utente" />
          </div>
           <p className="nomeUtente">Maria Rossi</p>
        </div>
        <div className="chat">
           <div className="messaggiRicevuti">
           {risposte.length > 0 &&  risposte.map((x , index)=> (<div className="risposta" key={index}>{x}</div>))  }
           </div>
           <div className="messaggiInviati">
           {messaggiInviati.map((x , index)=> (<div className="messaggio" key={index}>{x}</div>))}
           </div>
        </div>    
        <form onSubmit={handleInvia}  className="scrivi">
          <input className="barra" type="text"  onChange={(event) => setInviato(event.target.value)}  value={inviato}/>
         <button className="btnInviaMessaggio" type="submit" >✔️</button> 
        </form>
       </div>
    </>
   ) 

}