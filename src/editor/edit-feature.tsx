import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import UI from "../assets/image.png";
import { featureFunction } from './feature-function';
import {useRecoilState, useRecoilValue} from "recoil";
import { selected_feature} from "../store";

export const editFeature = () => {
    const selfeature = useRecoilValue(selected_feature);

    return(
      <div>
      { selfeature > 0 &&
    <div className = "edit-feature">
    <img className = {"feature"+selfeature.toString()} src = {UI} width = "100" height = "100" />
    <Box sx={{ margin: 5, width: 300 }}>
    <Slider
      className = "feature"
      defaultValue={30}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={0}
      max={100}
     />
     </Box>
    </div>
      }
      </div>
    );
}