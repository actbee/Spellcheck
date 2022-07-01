import UI from "../assets/image.png";
import React from "react";


export const featureFunction = (level: number = 0) => {
    console.log("Xuedan TODO: the number of the features shown is based on the current level and the spell name together, also user can click the icon of the feature to select it and edit it.")
     return(
        <div className = "objective-function">
        <img className = "feature1" src = {UI} width = "100" height = "100" />
        <p> &nbsp; &nbsp;&nbsp;   + &nbsp; &nbsp; &nbsp;   </p>
        <img className = "feature2" src = {UI} width = "100" height = "100" />
        <p> &nbsp; &nbsp; &nbsp;   +  &nbsp; &nbsp; &nbsp;  </p>
        <img className = "feature3" src = {UI} width = "100" height = "100" />
        </div>
     );
}