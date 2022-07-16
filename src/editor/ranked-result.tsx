import UI from "../image.png";
import React from "react";
import { featureFunction } from "../models/feature"
import { spellname } from "../models/spellname"
import { speedDialClasses } from "@mui/material";
import { valueToPercent } from "@mui/base";
import { spelllist } from "../models/spelllist";

export const rankedResult = () => {
    console.log("Hugo TODO: the results in Your Spell and Merlin's Spell are calculted by spell name and the feature weights user adjusted");
    
    /*
    // TODO: get global variables userFunction and merlinFunctions (their weight vectors)
    let userFunction: featureFunction, merlinFunction: featureFunction;
    let spells : spellname[]; // TODO: import all spells
    let userVal = value(userFunction), merlinVal = value(merlinFunction); // TODO: calculate value vector using spellname and user weights
    function compareUser(a : spellname, b : spellname) {
        let da = 0;
        for (var i = 0; i < userVal.length; i++) {
            da += (userVal[i] - a.weights[i]) ** 2 // TODO: define spellnames and their weight vectors
        }        

        let db = 0;
        for (var i = 0; i < userVal.length; i++) {
            da += (userVal[i] - b.weights[i]) ** 2
        }        
        return da - db;
    }

    function compareMerlin(a : spellname, b : spellname) {
        let da = 0;
        for (var i = 0; i < merlinVal.length; i++) {
            da += (merlinVal[i] - a.weights[i]) ** 2
        }        

        let db = 0;
        for (var i = 0; i < merlinVal.length; i++) {
            da += (merlinVal[i] - b.weights[i]) ** 2 
        }        
        return da - db;
    }
    let userSuggested = spells.sort(compareUser);
    let merlinSuggested = spells.sort(compareMerlin);

*/

    // display images corresonding to userSuggested and merlinSuggested in the UI
    return(

        /*
        <div className = "ranked-results">
            <div className = "spell-box">
             <p>Your Spell: </p>
             <div className = "bar">
             <img className = "word" src = {userSuggested[0].img} width = "75" height = "75" />
             <img className = "word" src = {userSuggested[1].img} width = "75" height = "75" />
             <img className = "word" src = {userSuggested[2].img} width = "75" height = "75" />
             <img className = "word" src = {userSuggested[3].img} width = "75" height = "75" />
             <img className = "word" src = {userSuggested[4].img} width = "75" height = "75" />
          
             </div>
             </div>
             <div className = "spell-box space">
             <p>Merlin's Spell: </p>
             <div className = "bar">
             <img className = "word" src = {merlinSuggested[0].img} width = "75" height = "75" />
             <img className = "word" src = {merlinSuggested[1].img} width = "75" height = "75" />
             <img className = "word" src = {merlinSuggested[2].img} width = "75" height = "75" />
             </div>
             </div>
        </div>
        */

        <div className = "ranked-results">
            <div className = "spell-box">
             <p>Your Spell: </p>
             <div className = "bar">
             <img className = "word" src = {UI} width = "75" height = "75" />
             <img className = "word" src = {UI} width = "75" height = "75" />
             <img className = "word" src = {UI} width = "75" height = "75" />
             <img className = "word" src = {UI} width = "75" height = "75" />
             <img className = "word" src = {UI} width = "75" height = "75" />
          
             </div>
             </div>
             <div className = "spell-box space">
             <p>Merlin's Spell: </p>
             <div className = "bar">
             <img className = "word" src = {UI} width = "75" height = "75" />
             <img className = "word" src = {UI} width = "75" height = "75" />
             <img className = "word" src = {UI} width = "75" height = "75" />
             </div>
             </div>
        </div>
        );

}