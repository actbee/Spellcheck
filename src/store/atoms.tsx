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
    value: 10,
    weight: 1,
    img: "../assets/image.png",
   },
   {
     type: "feature",
     value: 10,
     weight: 1,
     img: "../assets/image.png",
   },
   {
     type: "feature",
     value: 10,
     weight: 1,
     img: "../assets/image.png",
   },
   {
      type: "feature",
      value: 10,
      weight: 1,
      img: "../assets/image.png",
   }]
})

export const feature1 = atom<feature>({
   key: "feature1",
   default: {
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
     value: 10,
     weight: 1,
     img: "../assets/image.png",
    }
 })

 export const feature3 = atom<feature>({
    key: "feature3",
    default: {
     type: "feature",
     value: 10,
     weight: 1,
     img: "../assets/image.png",
    }
 })

 export const feature4 = atom<feature>({
    key: "feature4",
    default: {
     type: "feature",
     value: 10,
     weight: 1,
     img: "../assets/image.png",
    }
 })
 
 
