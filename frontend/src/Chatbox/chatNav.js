import React,{useState} from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import axios from "axios"


export default function ChatNav(props) {
    console.log(props.clubs)
  return <>
    <p>{props.comm}</p>
    <p>{props.clubs}</p>
    </>
}