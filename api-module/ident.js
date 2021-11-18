import axios from "axios"
import {APIURL} from "../constants" 
export default function Ident(){
    axios.get(APIURL + "/api/ident", {withCredentials: true})
    return <></>
}