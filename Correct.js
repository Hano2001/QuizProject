class Correct {
  constructor() {
    this.points = 0;
    this.answerAmount = 0;
    this.totalAnswers = [];
    
  }
  correcting(correctAnswers, userAnswer, mainQuestion, questionsAmount) {
   
    
    
    
    
    
    //correctAnswers.splice(0, 2); // I used splice on these two Arrays. The first two index's is empty.
    userAnswer.splice(0, 1);     //Because there is no answers in the first two runs of the method question.
    for (let i = 0; i < correctAnswers.length; i++) {
      this.totalAnswers[i] = {
        Question: mainQuestion[i],
        "CorrectAnswer?": correctAnswers[i],
        userAnswer: userAnswer[i],
      };
    }

    return this.totalAnswers, this.points;
  }
}
