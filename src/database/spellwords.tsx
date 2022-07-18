import {spellword} from "../models/spellword"

const spellword1 : spellword = {
    type: "spellword",
    id: "1",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_1.jpg",
    value:[1, 1, 1],
}

const spellword2 : spellword = {
    type: "spellword",
    id: "2",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_2.jpg",
    value:[0, 0, 0],
}

const spellword3 : spellword = {
    type: "spellword",
    id: "3",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_3.jpg",
    value:[1, 0.7, 1.2],
}

const spellword4 : spellword = {
    type: "spellword",
    id: "4",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_4.jpg",
    value:[-1.3, 1, 1.2],
}

const spellword5 : spellword = {
    type: "spellword",
    id: "5",
    img: "../assets/Generated_spells_panel/Spell_words/Spell_word_5.jpg",
    value:[1.5, 0.4, 1.1],
}

export const spellwords = [spellword1, spellword2, spellword3, spellword4, spellword5];