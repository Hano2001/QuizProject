class Correct {
  constructor() {
    this.points = 0;
    this.answerAmount = 0;
    this.totalAnswers = [];
    this.index = 0;
    this.c1 = document.getElementById("c1");
    this.c2 = document.getElementById("c2");
    this.c3 = document.getElementById("c3");
    this.c4 = document.getElementById("c4");
    this.c5 = document.getElementById("c5");
    this.c6 = document.getElementById("c6");
    
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
          " möjliga! Klicka på Nytt spel för nya frågor och nya utmaningar!"
      );

     

      
    }

    else{
      this.c1.disabled = true;
      this.c2.disabled = true;
      this.c3.disabled = true;    //Disables all checkboxes
      this.c4.disabled = true;
      this.c5.disabled = true;
      this.c6.disabled = true;

    }
    let questionsAnswers = [];
    let currentQuestionAnswers = [];
    questionsAnswers[this.index] = Object.values(
      quiz.question.answers[this.index]
    );
    currentQuestionAnswers = questionsAnswers[this.index];

    let corrList = quiz.question.correctAnswers[this.index];
    let corrIndex = [];

    for (let i = 0; i < corrList.length; i++) {
      if (corrList[i] === "true") {
        //Checks and pushes the index of every correct answer into a new Array.
        corrIndex.push(i);
      }
    }
    let rightAnswer = [];
    for (let i = 0; i < corrIndex.length; i++) {
      rightAnswer[i] = currentQuestionAnswers[corrIndex[i]];
    }
    let userCurrentQuestionAnswers = quiz.question.userAnswers[this.index];
    let yourAnswer = [];

    for (let i = 0; i < userCurrentQuestionAnswers.length; i++) {
      yourAnswer[i] = currentQuestionAnswers[userCurrentQuestionAnswers[i]];
    }
    

    document.getElementById("correctAnswer").textContent =
      "Rätt svar: " + rightAnswer;
    document.getElementById("userAnswer").textContent =
      "Du svarade: " + yourAnswer;
    let stringCorrIndex = corrIndex.toString(); //Stringifies the index, so it can be compared with the value of the user answer.

    if (stringCorrIndex == quiz.question.userAnswers[this.index]) {
      this.points += 1;
    }

    document.getElementById("userScore").textContent =
      "Poäng: " + this.points + "/" + quiz.question.amount;

    // if (this.index == 0) {
    //   let nextBtn = document.getElementById("next");
    //   nextBtn.parentNode.removeChild(nextBtn);
    //   document
    //     .querySelectorAll("input[type=checkbox]")
    //     .forEach((box) => box.remove());
    //   let corrBtn = document.getElementById("correct");
    //   corrBtn.innerHTML = "Nästa";
    // }

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

  reset(){    //resets the index for a new game.
    this.points = 0;
    this.answerAmount = 0;
    this.totalAnswers = [];
    this.index = 0;
  }
}
