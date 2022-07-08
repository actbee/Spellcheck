import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import UI from "../assets/image.png";
import { featureFunction } from './feature-function';
import {useRecoilState, useRecoilValue} from "recoil";
import { selected_feature, feature1, feature2, feature3, feature4} from "../store";
import { forEachLeadingCommentRange, validateLocaleAndSetLanguage } from 'typescript';

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
            var w = 1 + (value - 50) * 0.01;
            var img = document.getElementById("img"+selfeature.toString());
            img!.style.width = (100 * w).toString()+"px";
            console.log((100 * w).toString());
            img!.style.height = img!.style.width;
  
    }

    return(
      <div>
      { selfeature > 0 &&
    <div className = "edit-feature">
    <img className = {"feature"+selfeature.toString()}  src = {sel.img} width = "100" height = "100" />
    <Box sx={{ margin: 5, width: 300 }}>
    <Slider
      className = "feature"
      defaultValue={30}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={0}
      max={100}
      onChange = {(event, value) => feaModify(value)}
     />
     </Box>
    </div>
      }
      </div>
    );
}