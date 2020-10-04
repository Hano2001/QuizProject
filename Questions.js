class Questions {
  constructor(questionsAmount, questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.questionsAmount = questionsAmount;
    this.answers = [];
    this.answers2 = [];
    this.mainQuestions = [];
    this.correct = [];
    this.correctValue = [];
  }
  nextQuestion(questions, questionsAmount) {
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");
    let c4 = document.getElementById("c4");
    let c5 = document.getElementById("c5");
    let c6 = document.getElementById("c6");

    this.currentIndex += 1;
    let current = this.currentIndex - 1;

    inputAmount.innerHTML = this.currentIndex + "/" + questionsAmount;
    if (this.currentIndex + 1 > questionsAmount) {
      window.alert("Du är klar!");
    }

    this.correct[current] = questions[current].correct_answers;
    this.correctValue = Object.values(this.correct[current]);
    //Makes the different question answers into an array

    //console.log(current);
    document.getElementById("quest").textContent = questions[current].question;
   
    this.mainQuestions[current] = questions[current].question;
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

    if (c1.checked === true) {
      this.answers[this.currentIndex] =
        questions[current - 1].correct_answers.answer_a_correct;

      this.answers2[this.currentIndex] = 1;
    }

    if (c2.checked === true) {
      this.answers[this.currentIndex] =
        questions[current - 1].correct_answers.answer_b_correct; //Current -1, otherwise it will check the next questions index

      this.answers2[this.currentIndex] = 2;
    }

    if (c3.checked === true) {
      this.answers[this.currentIndex] =
        questions[current - 1].correct_answers.answer_c_correct;

      this.answers2[this.currentIndex] = 3;
    }

    if (c4.checked === true) {
      this.answers[this.currentIndex] =
        questions[current - 1].correct_answers.answer_d_correct;

      this.answers2[this.currentIndex] = 4;
    }
    if (c5.checked === true) {
      this.answers[this.currentIndex] =
        questions[current - 1].correct_answers.answer_e_correct;

      this.answers2[this.currentIndex] = 5;
    }
    if (c6.checked === true) {
      this.answers[this.currentIndex] =
        questions[current - 1].correct_answers.answer_f_correct;

      this.answers2[this.currentIndex] = 6;
    }
    //Cleanup
    c1.checked = false;
    c2.checked = false;
    c3.checked = false;
    c4.checked = false;
    c5.checked = false;
    c6.checked = false;

    console.log(this.answers);

    return this.answers, this.answers2, this.finalQuestions, this.correctValue;

   
  }
}
