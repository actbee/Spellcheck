import { spellname } from "./spellname"

export type feature = {
    type: "feature",
    value: number,
    weight: number,
    img: string,
    scale: number,
    selected: boolean,
    hidden: boolean,
}

export type featureFunction = {
    type: "feature-function"
    feature_list: feature[],
    value: number,
    father: spellname,
}