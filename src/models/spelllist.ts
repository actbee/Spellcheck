
export type spellword = {
    type: "spell-word",
    img: string,
    value: number,
}

export type spelllist = {
    type: "spell-list",
    spellarray : spellword[],
    max : number,
}

