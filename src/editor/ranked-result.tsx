import UI from "../image.png";
import React from "react";
import { featureFunction } from "../models/feature"
import { spellname } from "../models/spellname"
import { speedDialClasses } from "@mui/material";
import { levelbar } from "./levelbar";

export const rankedResult = () => {
    console.log("Hugo TODO: the results in Your Spell and Merlin's Spell are calculted by spell name and the feature weights user adjusted");
    
    /*
    
    // where are user and Merlin's featureFunction stored
    let userFunction: featureFunction, answerFunction: featureFunction, merlinFunction: featureFunction;
    // type error here
    let spells : spellname[]; // all spells
    let threshold = 30; // only spells with distance less than threshold are suggested

    let userSuggested : spellname[];
    let merlinSuggested : spellname[];
    for (let i = 0; i < spells.length; i++) {
        // how does levelbar.tsx receive inputs
        if (levelbar(userFunction, spells[i]) < threshold) {
            userSuggested.insert(spells[i]);
        }
        if (levelbar(merlinFunction, spells[i]) < threshold) {
            merlinSuggested.insert(spells[i])
        }
    }
    */

    // display images corresonding to userSuggested and merlinSuggested in the UI
    return(
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