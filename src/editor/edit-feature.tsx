import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import UI from "../assets/image.png";
import { featureFunction } from './feature-function';
import {useRecoilState, useRecoilValue} from "recoil";
import { selected_feature, feature1, feature2, feature3, feature4} from "../store";
import { forEachLeadingCommentRange, validateLocaleAndSetLanguage, walkUpBindingElementsAndPatterns } from 'typescript';
import { getSwitchBaseUtilityClass } from '@mui/material/internal/switchBaseClasses';

export const editFeature = () => {
    const selfeature = useRecoilValue(selected_feature);
    const [f1, setf1] = useRecoilState(feature1);
    const [f2, setf2] = useRecoilState(feature2);
    const [f3, setf3] = useRecoilState(feature3);
    const [f4, setf4] = useRecoilState(feature4);
    
    var sel = f1;
    if(selfeature == 2){
        sel = f2;
    }
    else if(selfeature == 3){
      sel = f3;
    }
    else if(selfeature == 4){
      sel = f4;
    }
    
    const feaModify = (value: any) => {
            var w = value;
            var img = document.getElementById("img"+selfeature.toString());
            img!.style.width = (100 * w).toString()+"px";
            console.log((100 * w).toString());
            img!.style.height = img!.style.width;
            if(sel == f1){
            setf1({ 
            type: "feature",
            value: 10,
            weight: w,
            img: "../assets/1.jpeg",
          });
        }
            else if(sel == f2){
              setf2({ 
                type: "feature",
                value: 10,
                weight: w,
                img: "../assets/image.png",
              });
            }
            else if(sel == f3){
              setf3({ 
                type: "feature",
                value: 10,
                weight: w,
                img: "../assets/image.png",
              });
            }
            else{
              setf4({ 
                type: "feature",
                value: 10,
                weight: w,
                img: "../assets/image.png",
              });
            }
    }


    return(
      <div>
      { selfeature > 0 &&
    <div className = "edit-feature">
    <img className = {"feature"+selfeature.toString()}  src = {sel.img} width = "100" height = "100" />
    <Box sx={{ margin: 5, width: 300 }}>
    <Slider
      className = "feature-slider"
      value = {sel.weight}
      defaultValue={1}
      valueLabelDisplay="auto"
      step={0.1}
      marks
      min={0.5}
      max={1.5}
      onChange = {(event, value) => feaModify(value)}
     />
     </Box>
    </div>
      }
      </div>
    );
}


/*
level: 2 -> features[]

database -> spell-names

spell name -> f1, f2, f3 f4 /// fn    ((f1a,f1b,f1c),(f2a,f2b,f2c), ....)
              w1, w2, w3 w4
              
              fi is vector
              v = sum fi * wi (v is vector)


 merlin spell: wm1, wm2, wm3 -> value-merlin 
            
              vm 

 database->   spell-word  (a,b,c)


 Your spell:  [spellword]    ranked list: min d(spellword, v)

 Merlin's spell: [spellword]  ranked list: min d(spellword, vm)


*/