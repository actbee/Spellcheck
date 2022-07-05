import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import UI from "../assets/image.png";
import { featureFunction } from './feature-function';
import {useRecoilState, useRecoilValue} from "recoil";
import { selected_feature} from "../store";
import { forEachLeadingCommentRange } from 'typescript';

export const editFeature = () => {
    const selfeature = useRecoilValue(selected_feature);

    const feaModify = (value: any) => {
            var weight = 1 + (value - 50) * 0.01;
            var img = document.getElementById("img"+selfeature.toString());
            img!.style.width = (100 * weight).toString()+"px";
            console.log((100 * weight).toString());
            img!.style.height = img!.style.width;
    }

    return(
      <div>
      { selfeature > 0 &&
    <div className = "edit-feature">
    <img className = {"feature"+selfeature.toString()}  src = {UI} width = "100" height = "100" />
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