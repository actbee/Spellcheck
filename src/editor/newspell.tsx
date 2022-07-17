import React from "react";
import { spellbook } from "../database/spellnames";

export const newspell = () => {
    //console.log("Winston TODO: finish the reset of the system variables and return a new random spell name to restart")
    //reset of the system variables
    let userAnswer = "";
    let correctAnswer = "";
    let distance = 0;
    let userAnswerArray = [];
    let correctAnswerArray = [];

    // return a new random spell either fire, water, or earth
    let randomSpell = spellbook[Math.floor(Math.random() * spellbook.length)];

    return randomSpell;
}
