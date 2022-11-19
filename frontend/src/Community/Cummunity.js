import React from "react";
import { AppBar } from "@mui/material";
import {useNavigate} from 'react-router-dom'
function Communities(props){

    const navigate=useNavigate()
    const fun=()=>{
        console.log("Hi")
        navigate("/Chats/?nn="+props.name)
    }
    return <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
    ><button onClick={fun}>{props.name}</button></AppBar>
}
export default Communities