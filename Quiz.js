class Quiz {
  constructor(name, questionsAmount) {
    this.name = name;
    this.questionsAmount = questionsAmount;
    this.score = 0;
    this.questions = [];
    this.currentIndex = -1;
  }

  submitName() {
    let inputAmount = document.getElementById("inputAmount");
    let userName = document.getElementById("userName");
    this.name = window.prompt("Vad heter du?");
    this.questionsAmount = window.prompt("Hur många frågor? (5-10)");
    inputAmount.innerHTML = this.questionsAmount;
    userName.innerHTML = this.name;
    return this.questionsAmount;
  }

  fetchQuestions() {
    let amount = this.questionsAmount;
    console.log(amount);
    fetch(
      "https://quizapi.io/api/v1/questions?apiKey=KKWjowvjvm8ginRJqxe6NsYhsyLuecmF7p8JMfJ3&limit=" +
        amount
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        this.questions = result;

        return this.questions;
      });
  }
  nextQuestion() {
    this.currentIndex += 1;
    inputAmount.innerHTML = this.currentIndex + 1 + "/" + this.questionsAmount;
    if (this.currentIndex +1 > this.questionsAmount) {
      window.alert("Du är klar!");
    }
    // let alt1 = document.getElementById("alt1");
    // let alt2 = document.getElementById("alt2");
    // let alt3 = document.getElementById("alt3");
    // let alt4 = document.getElementById("alt4");
    // let alt5 = document.getElementById("alt5");

  
      document.getElementById("quest").textContent = this.questions[this.currentIndex].question;
      document.getElementById("alt1").textContent = this.questions[this.currentIndex].answers.answer_a;
      document.getElementById("alt2").textContent = this.questions[this.currentIndex].answers.answer_b;
      document.getElementById("alt3").textContent = this.questions[this.currentIndex].answers.answer_c;
      document.getElementById("alt4").textContent = this.questions[this.currentIndex].answers.answer_d;
      document.getElementById("alt5").textContent = this.questions[this.currentIndex].answers.answer_e;
      

    
  }
}
