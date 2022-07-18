import {spellname} from "../models/spellname"

const spellname1 : spellname = {
    type: "spellname",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_name_tag/Tag_1.jpg",
    value: [[1,0,0], [0,1,0], [0,0,1], [0,0,0.5]],
}

const spellname2 : spellname = {
    type: "spellname",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_name_tag/Tag_2.jpg",
    value:[[0,1,0], [0.5,0,0.5], [-0.3,0,1], [1,0.6,-0.3]],
}

const spellname3 : spellname = {
    type: "spellname",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_name_tag/Tag_3.jpg",
    value:[[0,0,1], [1,0,0], [0,1,0], [-0.2,0.3,0.5]],
}

export const spellbook = [spellname1, spellname2, spellname3];