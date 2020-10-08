class Questions {
  constructor() {
    this.questions = 0;
    this.currentIndex = 0;
    this.c1 = document.getElementById("c1");
    this.c2 = document.getElementById("c2");
    this.c3 = document.getElementById("c3");
    this.c4 = document.getElementById("c4");
    this.c5 = document.getElementById("c5");
    this.c6 = document.getElementById("c6");

    this.correctAnswers = [];
    this.userAnswers = [];
    this.mainQuestion = [];
    this.amount = 0;
    

    this.answers = [];
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
    if (this.currentIndex < questionsAmount) {
      this.answers[this.currentIndex] = questions[this.currentIndex].answers;

      let correctArray = [];
      correctArray[this.currentIndex] =
        questions[this.currentIndex].correct_answers;
      this.correctAnswers[this.currentIndex] = Object.values(
        correctArray[this.currentIndex]
      ); //Makes the different question answer values into an Array
     
    

      document.getElementById("quest").textContent =
        questions[this.currentIndex].question;

      this.mainQuestion[this.currentIndex] =
        questions[this.currentIndex].question;

      document.getElementById("alt1").textContent =
        questions[this.currentIndex].answers.answer_a;
      document.getElementById("alt2").textContent =
        questions[this.currentIndex].answers.answer_b;
      if (questions[this.currentIndex].answers.answer_c != null) {
        this.c3.disabled = false;
        document.getElementById("alt3").textContent =
          questions[this.currentIndex].answers.answer_c;
      } else {
        document.getElementById("alt3").textContent = "";
        this.c3.disabled = true;
      }

      if (questions[this.currentIndex].answers.answer_d != null) {
        this.c4.disabled = false;
        document.getElementById("alt4").textContent =
          questions[this.currentIndex].answers.answer_d;
      } else {
        document.getElementById("alt4").textContent = "";
        this.c4.disabled = true;
      }
      if (questions[this.currentIndex].answers.answer_e != null) {
        this.c5.disabled = false;
        document.getElementById("alt5").textContent =
          questions[this.currentIndex].answers.answer_e;
      } else {
        document.getElementById("alt5").textContent = "";
        this.c5.disabled = true;
      }
      if (questions[this.currentIndex].answers.answer_f != null) {
        this.c6.disabled = false;
        document.getElementById("alt6").textContent =
          questions[this.currentIndex].answers.answer_f;
      } else {
        document.getElementById("alt6").textContent = "";
        this.c6.disabled = true;
      }
      this.currentIndex += 1;
    }
  }
  getUserAnswers() {
    let checks = document.querySelectorAll("input[type=checkbox]:checked");
    let arrayFromChecks = Array.from(checks);              //HTML collection of the checkboxes. And also reads the value of each checked.
    let checkMap = arrayFromChecks.map(function (check) {
      
      return check.value;
    });
    console.log("checkmap");
    this.userAnswers.push(checkMap);
  }

  uncheckBoxes() {
    this.c1.checked = false;
    this.c2.checked = false;
    this.c3.checked = false; //Cleanup on all the checkboxes before next question.
    this.c4.checked = false;
    this.c5.checked = false;
    this.c6.checked = false;
  }
}
