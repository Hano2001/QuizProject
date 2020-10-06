class Questions {
  constructor(questionsAmount, questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.questionsAmount = questionsAmount;
    this.correctAnswers = [];
    this.userAnswers = [];
    this.mainQuestion = [];
    this.checkArray = [];
    this.midArray = [];
  }
  nextQuestion(questions, questionsAmount) {
    this.currentIndex += 1;
    let current = this.currentIndex - 1; //I have a different currentIndex, so I don't miss the [0] values.

    inputAmount.innerHTML = this.currentIndex + "/" + questionsAmount;
    if (this.currentIndex > questionsAmount) {
      window.alert("Du är klar!");

      inputAmount.innerHTML =
        "Du har svarat på alla frågor! klicka på Rätta och sedan Visa resultat för att se hur bra du gjorde ifrån dig!";
    }
    let correctArray = [];
    correctArray[current] = questions[current].correct_answers;
    this.midArray[current] = Object.values(correctArray[current]);
    this.correctAnswers[current] = Array.from(this.midArray[current]);

    //Makes the different question answers into an Array^

    document.getElementById("quest").textContent = questions[current].question;

    this.mainQuestion[current] = questions[current].question;
    //console.log(this.correct);

    //console.log(correctValue);

    document.getElementById("alt1").textContent =
      questions[current].answers.answer_a;
    document.getElementById("alt2").textContent =
      questions[current].answers.answer_b;
    if (questions[current].answers.answer_c != null) {
      document.getElementById("alt3").textContent =
        questions[current].answers.answer_c;
    } else {
      document.getElementById("alt3").textContent = "";
    }

    if (questions[current].answers.answer_d != null) {
      document.getElementById("alt4").textContent =
        questions[current].answers.answer_d;
    } else {
      document.getElementById("alt4").textContent = "";
    }
    if (questions[current].answers.answer_e != null) {
      document.getElementById("alt5").textContent =
        questions[current].answers.answer_e;
    } else {
      document.getElementById("alt5").textContent = "";
    }
    if (questions[current].answers.answer_f != null) {
      document.getElementById("alt6").textContent =
        questions[current].answers.answer_f;
    } else {
      document.getElementById("alt6").textContent = "";
    }
    //this.checkArray.splice(0, this.checkArray.length);
    let checks = document.querySelectorAll("input[type=checkbox]:checked");
    let arrayFromChecks = Array.from(checks);
    let checkMap = arrayFromChecks.map(function(check){
      return check.value;
    })

    
      this.checkArray.push(checkMap);
    

    console.log(this.checkArray);
    //this.checkArray.splice(0, this.checkArray.length

    c1.checked = false;
    c2.checked = false;
    c3.checked = false; //Cleanup on all the checkboxes before next question.
    c4.checked = false;
    c5.checked = false;
    c6.checked = false;

    //console.log(this.correctAnswers);

    return (
      this.correctAnswers,
      this.userAnswers,
      this.mainQuestion,
      this.correctValue,
      this.questionsAmount
    );
  }
}
