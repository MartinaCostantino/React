import { useState, useEffect } from "react";
import "./chat.css"

export default function Chat(){
   const [inviato, setInviato]= useState(null);
   const[messaggiInviati, setMessaggiInviati] = useState([])
  
   
   
   const messaggiUscita=[ "Ciao!", "Come stai?", "Bene, che bella giornata!"]
   let [risposte, setRisposte] = useState([])
   let [indiceRisposta, setIndiceRisposta] = useState(0)
   
   
   function handleInvia(event) {
      event.preventDefault()
      setMessaggiInviati([...messaggiInviati, inviato])
      setTimeout(()=>{
         setIndiceRisposta(indiceRisposta + 1 ) 
         let ricevuto = messaggiUscita[indiceRisposta];
         setRisposte(risposta => [...risposta, ricevuto]);
         if (indiceRisposta === messaggiUscita.length ){
            ricevuto = "Scusa ora devo andare!"}

      },2000)
        event.target.reset();
        console.log(messaggiInviati)
        console.log(risposte)
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
          <input className="barra" type="text"  onChange={(event) => setInviato(event.target.value)} />
         <button className="btnInviaMessaggio" type="submit" >✔️</button> 
        </form>
       </div>
    </>
   ) 

}