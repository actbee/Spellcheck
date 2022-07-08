import { featureFunction } from "../models/feature";

export const levelbar = (userFunction: featureFunction, answerFunction: featureFunction) =>  {
   //console.log("Winston TODO: calculate the distance between the user's answer and the correct one.")
    // const distance = (userAnswer: string, correctAnswer: string) => {
    //     const userAnswerArray = userAnswer.split("");
    //     const correctAnswerArray = correctAnswer.split("");
    //     let distance = 0;
    //     for (let i = 0; i < userAnswerArray.length; i++) {
    //         distance += (Number(userAnswerArray[i]) - Number(correctAnswerArray[i])) ** 2
    //     }
    //     return distance ** 0.5; // linear distance
    // } 

    let distance = 0;
    for (let i = 0; i < answerFunction.feature_list.length; i++) {
        distance += (answerFunction.feature_list[i].weight - userFunction.feature_list[i].weight) ** 2;
    }
    return distance ** 0.5; // linear distance


    



}