import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React from 'react';
import UI from "../assets/image.png";
import { featureFunction } from './feature-function';

export const editFeature = () => {
    console.log("Xuedan TODO: finish the bundle part, bundle the change of the weight to its corresponed feature.");
    return(
    <div className = "edit-feature">
    <img className = "feature1" src = {UI} width = "100" height = "100" />
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
    );
}