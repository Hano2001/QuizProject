class FinalResults {
  constructor(question, answerA, answerB, answerC, answerD, answerE, answerF) {
    this.question = question;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
    this.answerE = answerE;
    this.answerF = answerF;
    this.index = -1;
  }

  results(totalAnswers, questions, correctValue) {
    
    this.index +=1
    document.getElementById("quest").textContent = totalAnswers[this.index].Question;
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
    // let box = document.getElementById("question");
    // let nextBtn = document.createElement("button");
    // box.appendChild(nextBtn);
    // nextBtn.innerHTML = "Nästa";
    // nextBtn.addEventListener("click", function (e) {
    //   console.log(correctValue)
    // });

    //console.log(correctValue[index]);
  }
}
