
export type spellword = {
    type: "spellword",
    id: string,
    img: string,
    value: number[],
}

export type spelllist = {
    type: "spell-list",
    spellarray : spellword[],
}

