import { useState } from "react"

export default function Container({title, children}){
    const [collapsed, setCollapsed] = useState(false)

    function HandleToggle(){
    setCollapsed((t) => !t)
    }
    return(
       
        <div className="container">
          <div className="title">
            <h2>{title}</h2>
            <button className="btnToggle" onClick={HandleToggle}>Toggle</button>
            </div>  
           <div className={collapsed ? "visibile" : "invisibile"}>
            
            {children}
            </div> 
        </div>
    )
}