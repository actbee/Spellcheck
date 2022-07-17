import UI from "../image.png";
import React from "react";
import { newspell } from "./newspell"
import {useRecoilState, useRecoilValue} from "recoil";
import { currentspellname } from "../store";

export const spellName = ()=>{
    console.log("Hugo TODO: each time once cliked TRY A NEW ONE the spell name image should be refreshed randomly ")
    
    const sn = useRecoilValue(currentspellname);

    return(
    <div className = "spell-name">
         <p>Spell Name: </p>
         <img className = "spellname" src = {sn.img} width = "300" height = "300" />
    </div>
    );
}