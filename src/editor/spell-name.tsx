import UI from "../image.png";
import React from "react";


export const spellName = ()=>{
    console.log("Hugo TODO: each time once cliked TRY A NEW ONE the spell name image should be refreshed randomly ")
    return(
    <div className = "spell-name">
         <p>Spell Name: </p>
         <img className = "spellname" src = {UI} width = "300" height = "300" />
    </div>
    );
}