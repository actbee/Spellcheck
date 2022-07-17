import {spellname} from "../models/spellname"

const spellname1 : spellname = {
    type: "spellname",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_name_tag/Tag_1.jpg",
    value: [[1,1,1], [2,3,4], [5,1,2], [5,6,9]],
}

const spellname2 : spellname = {
    type: "spellname",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_name_tag/Tag_2.jpg",
    value: [[-1,1,0], [2,2,4], [-4,1,3], [0,0,1]],
}

const spellname3 : spellname = {
    type: "spellname",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_name_tag/Tag_3.jpg",
    value: [[0,3,2], [4,1,2], [-2,2,0], [0,2,-3]],
}

export const spellbook = [spellname1, spellname2, spellname3];