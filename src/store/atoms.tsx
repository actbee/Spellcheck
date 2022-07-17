import {atom, selector} from "recoil";
import {feature} from "../models/feature";
import {spellname} from "../models/spellname";

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
    value: [0, 0, 0],
    weight: 1,
    merlinweight: 0.7,
    img: "../assets/Objective_function_panel/Blue_potion.png",
   },
   {
     type: "feature",
     id: "2",
     value: [0, 0, 0],
     weight: 1,
     merlinweight: 1.1,
     img: "../assets/Objective_function_panel/Clear_blue_potion.png",
   },
   {
     type: "feature",
     id: "3",
     value: [0, 0, 0],
     weight: 1,
     merlinweight: 1,
     img: "../assets/Objective_function_panel/Clear_pink_potion.png",
   },
   {
      type: "feature",
      id: "4",
      value: [0, 0, 0],
      weight: 0,
      merlinweight: 1.3,
      img: "../assets/Objective_function_panel/Clear_red_potion.png",
   }]
})

export const userfun = selector({
     key: "function",
     get: ({get}) => {
        const fs = get(features);
        var sum = [0,0,0];
        for(let i = 0; i<fs.length;i++){
         sum[0]+= fs[i].weight * fs[i].value[0];
         sum[1]+= fs[i].weight * fs[i].value[1];
         sum[2]+= fs[i].weight * fs[i].value[2];
        }
        
        return sum;
     }   
})

export const merlinfun = selector({
   key: "function",
   get: ({get}) => {
      const fs = get(features);
      var sum = [0,0,0];
      for(let i = 0; i<fs.length;i++){
       sum[0]+= fs[i].merlinweight * fs[i].value[0];
       sum[1]+= fs[i].merlinweight * fs[i].value[1];
       sum[2]+= fs[i].merlinweight * fs[i].value[2];
      }
      
      return sum;
   }   
})

export const currentspellname = atom<spellname>({
   key: "current-sn",
   default: {
      type: "spellname",
      id: "1",
      img: "../assets/Generated_spells_panel/Spell_name_tag/Tag_1.jpg",
      value: [[1,1,1], [2,3,4], [5,1,2], [5,6,9]],
   }
   
})



 
 
