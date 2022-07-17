import {atom, selector} from "recoil";
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
      weight: 0,
      img: "../assets/Objective_function_panel/Clear_red_potion.png",
   }]
})

export const fun = selector({
     key: "function",
     get: ({get}) => {
        const fs = get(features);
        var sum = 0;
        for(let i = 0; i<fs.length;i++){
         sum+= fs[i].weight * fs[i].value;
        }
        
        return sum;
     }
     
})


 
 
