import react, { useEffect ,useState} from "react"
import axios from "axios"
import {useSearchParams} from "react-router-dom"
function Users(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [communityName,setCommunityName]=useState("")
    
}

export default Users
