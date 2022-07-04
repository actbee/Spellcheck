import {atom} from "recoil";

export const level = atom({
    key: "current-level",
    default: 0,
})