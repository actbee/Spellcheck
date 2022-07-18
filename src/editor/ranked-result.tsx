import UI from "../image.png";
import React,  { useEffect } from "react";
import {userfun, merlinfun, features} from "../store";
import { spellname } from "../models/spellname"
import { speedDialClasses } from "@mui/material";
import { valueToPercent } from "@mui/base";
import { spelllist } from "../models/spellword";
import { feature } from "../models/feature";
import { useRecoilValue } from "recoil";
import { spellwords } from "../database/spellwords";
import { spellword } from "../models/spellword"


export const rankedResult = () => {
    // console.log("Hugo TODO: the results in Your Spell and Merlin's Spell are calculted by spell name and the feature weights user adjusted");
    
    
    let userVal: number[] = useRecoilValue(userfun);
    let merlinVal: number[] = useRecoilValue(merlinfun); // change to user and merlin's weight functions
    let fs = useRecoilValue(features); // TODO: import featuers of current level

    function compareUser(a : spellword, b : spellword) {
        let da = 0;
        for (var i = 0; i < userVal.length; i++) {
            da += (userVal[i] - a.value[i]) ** 2
        }        
        let db = 0;
        for (var i = 0; i < userVal.length; i++) {
            db += (userVal[i] - b.value[i]) ** 2
        }        
        return da - db;
    }

    function compareMerlin(a : spellword, b : spellword) {
        let da = 0;
        for (var i = 0; i < merlinVal.length; i++) {
            da += (merlinVal[i] - a.value[i]) ** 2
        }        

        let db = 0;
        for (var i = 0; i < merlinVal.length; i++) {
            db += (merlinVal[i] - b.value[i]) ** 2 
        }        

        return da - db;
    }
     // use deep copy here
    let userSuggested = [...spellwords].sort(compareUser);
    let merlinSuggested = [...spellwords].sort(compareMerlin);
    
    useEffect(() => {
        userSuggested = [...spellwords].sort(compareUser);
        merlinSuggested = [...spellwords].sort(compareMerlin);
    },[fs]);



    // display images corresonding to userSuggested and merlinSuggested in the UI
    return(

        <div className = "ranked-results">
            <div className = "spell-box">
             <p>Your Spell: </p>
             <div className = "bar">
             <img className = "word" src = {userSuggested[0].img} width = "75" height = "75" />
             <img className = "word" src = {userSuggested[1].img} width = "75" height = "75" />
             <img className = "word" src = {userSuggested[2].img} width = "75" height = "75" />
             {/* <img className = "word" src = {userSuggested[3].img} width = "75" height = "75" />
             <img className = "word" src = {userSuggested[4].img} width = "75" height = "75" /> */}
          
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

        /*
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
        </div> */
        );
        
}