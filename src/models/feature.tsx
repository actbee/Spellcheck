export type feature = {
    type: "feature",
    value: number[],
    img: string,
    id: string,
    weight: number,
    merlinweight: number,
}

export type weights = {
    type: "weights",
    weight: number[],
}

export type merlinweights = {
    type: "merlinweights",
    weight: number[],
}
