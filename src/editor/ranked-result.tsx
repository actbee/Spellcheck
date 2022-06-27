import UI from "../assets/image.png";
import React from "react";

export const rankedResult = () => {
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