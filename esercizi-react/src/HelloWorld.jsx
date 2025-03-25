import { useContext } from "react"
import { LanguageContext } from "./Language"

export default function HelloWorld(){
   const language = useContext(LanguageContext);
   return <h2>{language === "en" ? "Hello world!" : "Ciao mondo!" }</h2>
}