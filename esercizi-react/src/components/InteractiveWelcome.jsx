import { useState } from "react";
import Welcome from "./Welcome";

import UncontrolledLogin from "./UncontrolledLogin";

export default function InteractiveWelcome() {
    const [userName, setUserName] = useState("");

    function handleName(event) {
        setUserName(event.target.value);
    }

    

    return (
        <div>
            <input 
                type="text" 
                value={userName} 
                name="name" 
                onChange={handleName} 
                placeholder="Scrivi il tuo nome"
            />
            <Welcome name={userName} />
            <UncontrolledLogin  />
        </div>
    );
}








