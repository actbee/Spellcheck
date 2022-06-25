
import "./main.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect } from "react"; 
import Slider from '@mui/material/Slider';
import {useState, useRef} from "react";
import IconButton from '@mui/material/IconButton';

export default function Main(){
    return(
        <div className = "main">
            <div className = "control-panel">
            <Stack spacing={30} direction = "row">
               <Button size="large" variant="contained">Try a new spell</Button> 
               <p>bar</p>
               <p>level 1</p>
               </Stack>    
            </div>
            <div className = "objective-function-panel">
               <p>Objective function:</p>
               <p>Edit feature importance: </p>
            </div> 
            <div className = "generated-spells-panel">
            <Stack spacing={20} direction = "row">
                <p>Spell Name: </p>
                <p>Your Spell</p>
                <p>Merlin's Spell</p>
             </Stack>
            </div>       
        </div>
    )
}