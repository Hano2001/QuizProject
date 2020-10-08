class Quiz {
  constructor() {
    this.userName = document.getElementById("userName");
    this.name = window.prompt("Vad heter du?");
    this.userName.innerHTML = "Namn: " + this.name;
    this.questionsAmount = 0;
    this.questions = [];
  }

  submitInfo() {
    let inputAmount = document.getElementById("inputAmount");

    this.questionsAmount = window.prompt("Hur många frågor? (5-10)");
    if (this.questionsAmount > 10) {
      alert(
        "Du angav för många frågor. Tio är max, du får svara på tio frågor."
      );
      this.questionsAmount = 10;
    }

    if (this.questionsAmount < 5) {
      alert(
        "Du angav för få frågor. Fem är minst godkänt. Du får svara på fem frågor"
      );
      this.questionsAmount = 5;
    }
    alert("Tryck på Quizstart! för att starta quizen!");
    inputAmount.innerHTML = this.questionsAmount;
  }

  fetchQuestions() {
    fetch(
      "https://quizapi.io/api/v1/questions?apiKey=KKWjowvjvm8ginRJqxe6NsYhsyLuecmF7p8JMfJ3&limit=" +
        this.questionsAmount
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        this.questions = result;

        this.question = new Questions();

        this.question.displayNextQuestion(this.questions, this.questionsAmount);
      });
  }
  reset(){
    this.questionsAmount = 0;
    this.questions = [];
  }
}

