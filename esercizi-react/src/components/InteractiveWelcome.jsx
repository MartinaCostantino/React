import { useState } from "react";
import Welcome from "./Welcome";
import Login from "./Login";

export default function InteractiveWelcome() {
    const [userName, setUserName] = useState("");

    function handleName(event) {
        setUserName(event.target.value);
    }

    function onLogin(data) {
        console.log("Login data:", data);
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
            <Login onLogin={onLogin} />
        </div>
    );
}








