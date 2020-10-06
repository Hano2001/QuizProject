class Questions {
  constructor() {
    this.questions = 0;
    this.currentIndex = 0;
    this.questionsAmount = 0;
    this.correctAnswers = [];
    this.userAnswers = [];
    this.mainQuestion = [];
    
    this.midArray = [];
  }
  nextQuestion(questions, questionsAmount) {
    //console.log(this.currentIndex);
    //console.log(typeof questionsAmount);
    let amount = parseInt(questionsAmount);
    inputAmount.innerHTML = this.currentIndex +1 + "/" + questionsAmount;
    if (this.currentIndex === amount) {
      window.alert("Du är klar!");

      inputAmount.innerHTML =
        "Du har svarat på alla frågor! klicka på Rätta och sedan Visa resultat för att se hur bra du gjorde ifrån dig!";
    }
    let correctArray = [];
    correctArray[this.currentIndex] = questions[this.currentIndex].correct_answers;
    this.midArray[this.currentIndex] = Object.values(correctArray[this.currentIndex]);
    this.correctAnswers[this.currentIndex] = Array.from(this.midArray[this.currentIndex]);

    //Makes the different question answers into an Array^

    document.getElementById("quest").textContent = questions[this.currentIndex].question;

    this.mainQuestion[this.currentIndex] = questions[this.currentIndex].question;
    

    document.getElementById("alt1").textContent =
      questions[this.currentIndex].answers.answer_a;
    document.getElementById("alt2").textContent =
      questions[this.currentIndex].answers.answer_b;
    if (questions[this.currentIndex].answers.answer_c != null) {
      document.getElementById("alt3").textContent =
        questions[this.currentIndex].answers.answer_c;
    } else {
      document.getElementById("alt3").textContent = "";
    }

    if (questions[this.currentIndex].answers.answer_d != null) {
      document.getElementById("alt4").textContent =
        questions[this.currentIndex].answers.answer_d;
    } else {
      document.getElementById("alt4").textContent = "";
    }
    if (questions[this.currentIndex].answers.answer_e != null) {
      document.getElementById("alt5").textContent =
        questions[this.currentIndex].answers.answer_e;
    } else {
      document.getElementById("alt5").textContent = "";
    }
    if (questions[this.currentIndex].answers.answer_f != null) {
      document.getElementById("alt6").textContent =
        questions[this.currentIndex].answers.answer_f;
    } else {
      document.getElementById("alt6").textContent = "";
    }

    let checks = document.querySelectorAll("input[type=checkbox]:checked");
    let arrayFromChecks = Array.from(checks);
    let checkMap = arrayFromChecks.map(function (check) {
      return check.value;
    });

    this.userAnswers.push(checkMap);

    // console.log(this.userAnswers);
    // console.log(this.correctAnswers);

    c1.checked = false;
    c2.checked = false;
    c3.checked = false; //Cleanup on all the checkboxes before next question.
    c4.checked = false;
    c5.checked = false;
    c6.checked = false;

    //console.log(this.correctAnswers);
    this.currentIndex += 1;
    return (
      this.correctAnswers,
      this.userAnswers,
      this.mainQuestion,
      this.correctValue,
      this.questionsAmount
    );
  }
}
