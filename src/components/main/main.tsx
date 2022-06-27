
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
import {readUI} from '../../editor/readUI';
import UI from "../../assets/image.png";
import { featureFunction } from "../../editor/feature-function"
import { editFeature } from "../../editor/edit-feature"
import { spellName } from "../../editor/spell-name";
import { rankedResult } from "../../editor/ranked-result";


export default function Main(){
    return(
        <div className = "main">
            <div className = "control-panel">
            <Stack spacing={30} direction = "row">
               <Button size="large" variant="contained">Try a new spell</Button> 
               <img className = "progress_bar" src = {UI} width = "100" height = "100" />
               <img className = "current_level" src = {UI} width = "100" height = "100" />
               </Stack>    
            </div>

            <div className = "objective-function-panel">
                <div className = "left_ofp">
               <p>Objective function:</p>
               <br/>
                {featureFunction()} 
               </div>

               <div className = "right_ofp">
               <p>Edit feature importance: </p>
               <br/>
                {editFeature()}
               </div>

            </div> 
            
            <div className = "generated-spells-panel">
            {spellName()}
            {rankedResult()}
            </div>       
        </div>
    )
}