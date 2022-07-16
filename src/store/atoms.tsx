import {atom} from "recoil";
import {feature} from "../models/feature"

export const level = atom({
    key: "current-level",
    default: 0,
})

export const selected_feature = atom({
    key: "current-feature",
    default: 0,
})

export const features = atom<feature[]>({
   key: "features",
   default: [{
    type: "feature",
    id: "1",
    value: 10,
    weight: 1,
    img: "../assets/Objective_function_panel/Blue_potion.png",
   },
   {
     type: "feature",
     id: "2",
     value: 10,
     weight: 1,
     img: "../assets/Objective_function_panel/Clear_blue_potion.png",
   },
   {
     type: "feature",
     id: "3",
     value: 10,
     weight: 1,
     img: "../assets/Objective_function_panel/Clear_pink_potion.png",
   },
   {
      type: "feature",
      id: "4",
      value: 10,
      weight: 1,
      img: "../assets/Objective_function_panel/Clear_red_potion.png",
   }]
})

export const feature1 = atom<feature>({
   key: "feature1",
   default: {
    id: "1",
    type: "feature",
    value: 10,
    weight: 1,
    img: "../assets/1.jpeg",
   }
})

export const feature2 = atom<feature>({
    key: "feature2",
    default: {
     type: "feature",
     id: "2",
     value: 10,
     weight: 1,
     img: "../assets/image.png",
    }
 })

 export const feature3 = atom<feature>({
    key: "feature3",
    default: {
     type: "feature",
     id: "3",
     value: 10,
     weight: 1,
     img: "../assets/image.png",
    }
 })

 export const feature4 = atom<feature>({
    key: "feature4",
    default: {
     type: "feature",
     id: "4",
     value: 10,
     weight: 1,
     img: "../assets/image.png",
    }
 })
 
 
