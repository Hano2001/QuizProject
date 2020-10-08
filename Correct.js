class Correct {
  constructor() {
    this.points = 0;
    this.answerAmount = 0;
    this.totalAnswers = [];
    this.index = 0;
  }

  correcting(quiz) {
    if (this.index === quiz.question.amount) {
      window.alert(
        "Bravo, " +
          quiz.name +
          "! Du fick " +
          this.points +
          " poäng av " +
          quiz.question.amount +
          " möjliga!"
      );

      let reset = document.getElementById("reset");
      let resetBtn = document.createElement("button");
      resetBtn.innerHTML = "Nytt spel";
      reset.appendChild(resetBtn)

      resetBtn.addEventListener("click", function(e)
      {
        window.location.replace("script.js");
      });
    }
    let corrArray = [];
    let corrArray2 = [];
    corrArray[this.index] = Object.values(quiz.question.answersArray[this.index])
    corrArray2 = Array.from(corrArray[this.index]);
    //console.log(testArray2);
      
    //console.log(testArray2);


    let corrList = quiz.question.correctAnswers[this.index]; //Strips each correctAnswers index into it's own array
    let corrIndex = [];
    //console.log(amount);
    let testAnswers = []
    for (let i = 0; i < corrList.length; i++) {
      if (corrList[i] === "true") {
        //Checks and pushes the index of every correct answer into a new Array.
        corrIndex.push(i);
        
      }
    }
    let rightAnswer = [];
    for (let i = 0; i <corrIndex.length; i ++)
    {
       rightAnswer[i] = corrArray2[corrIndex[i]];
    }

    let yourAnswer = [];

    for (let i = 0; i <quiz.question.userAnswers.length; i ++)
    {
      yourAnswer = corrArray2[quiz.question.userAnswers[i]];
    }
    console.log(corrArray2);
    console.log(quiz.question.userAnswers);
    console.log(yourAnswer);

  

    
   
    document.getElementById("correctAnswer").textContent = "Rätt svar: " + rightAnswer;
    document.getElementById("userAnswer").textContent = "Du svarade: " + yourAnswer ;
    let stringCorrIndex = corrIndex.toString(); //Stringifies the index, so it can be compared with the value of the user answer.
    //console.log(corrIndex);
    if (stringCorrIndex == quiz.question.userAnswers[this.index]) {
      this.points += 1;
    } 
    // console.log(stringCorrIndex);
    // console.log(quiz.question.userAnswers[this.index]);
    // console.log("Poäng: " + this.points);
    document.getElementById("userScore").textContent =
      "Poäng: " + this.points + "/" + quiz.question.amount;

    for (let i = 0; i < quiz.question.amount; i++) {
      this.totalAnswers[i] = {
        Question: quiz.question.mainQuestion[i],      //If the userAnswer is thet same as the correct index(s). The user will get a point.
        "CorrectAnswer?": stringCorrIndex[i],
        userAnswer: quiz.question.userAnswers[i],
      };
    }

    if (this.index == 0) {
      let nextBtn = document.getElementById("next");
      nextBtn.parentNode.removeChild(nextBtn);
      document.querySelectorAll("input[type=checkbox]").forEach(box => box.remove());
      let corrBtn = document.getElementById("correct");
      corrBtn.innerHTML = "Nästa";
    }
    
    

    inputAmount.innerHTML = this.index + 1 + "/" + quiz.question.amount; //index + 1, because there is no question 0.

    document.getElementById("quest").textContent =
      quiz.questions[this.index].question;

    document.getElementById("alt1").textContent =
      quiz.questions[this.index].answers.answer_a;

    document.getElementById("alt2").textContent =
      quiz.questions[this.index].answers.answer_b;

    document.getElementById("alt3").textContent =
      quiz.questions[this.index].answers.answer_c;

    document.getElementById("alt4").textContent =
      quiz.questions[this.index].answers.answer_d;

    document.getElementById("alt5").textContent =
      quiz.questions[this.index].answers.answer_e;

    document.getElementById("alt6").textContent =
      quiz.questions[this.index].answers.answer_f;

    this.index += 1;
    
}
}