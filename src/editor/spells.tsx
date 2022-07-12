import React from "react";
import { featureFunction } from "../models/feature";
import { spellname } from "../models/spellname";
import { spellName } from "./spell-name";




const fireSpell: spellname = {
    type: "fire",
    img: "https://www.istockphoto.com/photos/fireball",
    value: 1,
};

const windSpell: spellname = {
    type: "wind",
    img: "https://www.istockphoto.com/photos/wind",
    value: 2,
};

const earthSpell: spellname = {
    type: "earth",
    img: "https://www.istockphoto.com/photos/earth-shaking",
    value: 3,
};


export const spellbook = [fireSpell, windSpell, earthSpell];


