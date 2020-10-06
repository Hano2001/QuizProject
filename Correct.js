class Correct {
  constructor() {
    this.points = 0;
    this.answerAmount = 0;
    this.totalAnswers = [];
    this.index = 0;
  }
  
  
  correcting(correctAnswers, userAnswer, mainQuestion, questionsAmount) {
   
    let  corrList = correctAnswers[this.index];
    let corrIndex = []; //corrList.multiIndexOf("true");
    
    // console.log(stringCorrIndex);
    // console.log(userAnswer[this.index]);

    for(let i = 0; i < corrList.length; i ++)
    {
      if(corrList[i] === "true"){
        corrIndex.push(i);
      }
    }
    let stringCorrIndex = corrIndex.toString();
      console.log(corrIndex);
     if(stringCorrIndex == userAnswer[this.index])
     {
       this.points +=1;
     }
   
     console.log("Poäng: " + this.points);
   
    for (let i = 0; i < correctAnswers.length; i++) {
      this.totalAnswers[i] = {
        Question: mainQuestion[i],
        "CorrectAnswer?": correctAnswers[i],
        userAnswer: userAnswer[i],
      };
    }
    this.index += 1;
    return this.totalAnswers, this.points;
  }
}
