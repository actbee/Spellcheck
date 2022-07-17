import UI from "../assets/image.png";
import React from "react";
import Button from '@mui/material/Button';
import {useRecoilState, useRecoilValue} from "recoil";
import { selected_feature, features} from "../store";
import { requirePropFactory } from "@mui/material";


export const featureFunction = (level: number = 0) => {
    const [selfeature, setselfeature] = useRecoilState(selected_feature);

    const [fs, setfs] = useRecoilState(features);
    
    

    const chooseFeature = (num: number) => {
        if(selfeature > 0){
        var oribtn = document.getElementById(selfeature.toString());
        oribtn!.style.backgroundColor = "";
        }
        var btn = document.getElementById(num.toString());
        btn!.style.backgroundColor = "black";
        setselfeature(num);
        
    }

    return(
        <div className = "objective-function">
         <button className = "feature-button" id = "1"  onClick = {() => chooseFeature(1)}>
        <img className = "feature1" id = "img1" src = {fs[0].img} width = "100" height = "100" />
        </button>
        <p> &nbsp; &nbsp;&nbsp;   + &nbsp; &nbsp; &nbsp;   </p>
        <button className = "feature-button" id = "2" onClick = {() => chooseFeature(2)}>
        <img className = "feature2" id = "img2" src = {fs[1].img} width = "100" height = "100" />
        </button>
        <p> &nbsp; &nbsp; &nbsp;   +  &nbsp; &nbsp; &nbsp;  </p>
        <button className = "feature-button" id = "3" onClick = {() => chooseFeature(3)}>
        <img className = "feature3" id = "img3" src = {fs[2].img} width = "100" height = "100" />
        </button>
        {
         /*
           the level control is implemented here
         */        
             level > 0 &&
             <div className = "objective-function">
               <p> &nbsp; &nbsp; &nbsp;   +  &nbsp; &nbsp; &nbsp;  </p>
               <button>
               <img className = "feature4" src = {fs[3].img} width = "100" height = "100"/>
               </button>
            </div>        
             
        }
        </div>
     );
}