export const levelbar = ()=> {
   //console.log("Winston TODO: calculate the distance between the user's answer and the correct one.")
    const distance = (userAnswer: string, correctAnswer: string) => {
        const userAnswerArray = userAnswer.split("");
        const correctAnswerArray = correctAnswer.split("");
        let distance = 0;
        for (let i = 0; i < userAnswerArray.length; i++) {
            if (userAnswerArray[i] !== correctAnswerArray[i]) {
                distance++;
            }
        }
        return distance;
    } 
    



}