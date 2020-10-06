class FinalResults {
  constructor(question, answerA, answerB, answerC, answerD, answerE, answerF) {
    this.question = question;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
    this.answerE = answerE;
    this.answerF = answerF;
    this.index = -1; //index starts as -1. So that you can get the question/answers with index 0. This.index starts at 1 in results method.
  }

  results(totalAnswers, questions, questionsAmount, correctAnswers) {

    this.index +=1
    for(let i = 0; i < 5; i ++){
    if(correctAnswers[this.index][i] === "true")
    {
      if(i = 0) {
        console.log("A");
      }
    }
  }
    inputAmount.innerHTML = this.index + 1 + "/" + questionsAmount; //index + 1, because there is no question 0.
    console.log(totalAnswers);
    document.getElementById("quest").textContent =
      questions[this.index].question;
    document.getElementById("alt1").textContent =
      questions[this.index].answers.answer_a;
      
    document.getElementById("alt2").textContent =
      questions[this.index].answers.answer_b;
    document.getElementById("alt3").textContent =
      questions[this.index].answers.answer_c;
    document.getElementById("alt4").textContent =
      questions[this.index].answers.answer_d;
    document.getElementById("alt5").textContent =
      questions[this.index].answers.answer_e;
    document.getElementById("alt6").textContent =
      questions[this.index].answers.answer_f;
    console.log(this.index);
    
    
    
   
    //console.log(correctValue[index]);
  }
}
