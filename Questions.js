class Questions {
  constructor() {
    this.questions = 0;
    this.currentIndex = 0;

    this.correctAnswers = [];
    this.userAnswers = [];
    this.mainQuestion = [];
    this.amount = 0;
    this.midArray = [];
    this.index2 = -1;
    this.answers = [];
    this.answersArray = [];
  }
  displayNextQuestion(questions, questionsAmount) {
    let questionNr = this.currentIndex + 1; //Adding a variable with the current index +1, to display the question number, there is no question 0.
    this.amount = parseInt(questionsAmount);
    inputAmount.innerHTML = "Fråga: " + questionNr + "/" + questionsAmount;
    if (this.currentIndex === this.amount) {
      window.alert("Du är klar!");

      inputAmount.innerHTML =
        "Du har svarat på alla frågor! klicka på Rätta för att se hur bra du gjorde ifrån dig!";
    }

    this.answers[this.currentIndex] = questions[this.currentIndex].answers;

    this.answersArray = Array.from(this.answers); //Makes the different question answers into an Array

    let correctArray = [];
    correctArray[this.currentIndex] =
      questions[this.currentIndex].correct_answers;
    this.midArray[this.currentIndex] = Object.values(
      correctArray[this.currentIndex]
    ); //Makes the different question answer values into an Array
    this.correctAnswers[this.currentIndex] = Array.from(
      this.midArray[this.currentIndex]
    );

    document.getElementById("quest").textContent =
      questions[this.currentIndex].question;

    this.mainQuestion[this.currentIndex] =
      questions[this.currentIndex].question;

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
    
    

  

  

    this.currentIndex += 1;
    this.index2 += 1;
  }
  getUserAnswers(){
    let checks = document.querySelectorAll("input[type=checkbox]:checked");
    let arrayFromChecks = Array.from(checks);
    let checkMap = arrayFromChecks.map(function (check) {
      //HTML collection of the checkboxes. And also reads the value of each checked.
      return check.value;
    });
    console.log("checkmap");
    this.userAnswers.push(checkMap);
  }

  uncheckBoxes(){
    c1.checked = false;
    c2.checked = false;
    c3.checked = false; //Cleanup on all the checkboxes before next question.
    c4.checked = false;
    c5.checked = false;
    c6.checked = false;

  }
}
