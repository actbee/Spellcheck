import {atom} from "recoil";

export const level = atom({
    key: "current-level",
    default: 0,
})

export const selected_feature = atom({
    key: "current-feature",
    default: 0,
})