class Quiz {
  constructor(name, questionsAmount) {
    this.name = name;
    this.questionsAmount = questionsAmount;
    this.score = 0;
    this.questions = [];
    this.currentIndex = 0;
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

        let alt1 = document.getElementById("alt1");
        let alt2 = document.getElementById("alt2");
        let alt3 = document.getElementById("alt3");
        let alt4 = document.getElementById("alt4");

        quest.innerHTML = result[0].question;

        alt1.innerHTML = result[0].answers.answer_a;
        alt2.innerHTML = result[0].answers.answer_b;
        alt3.innerHTML = result[0].answers.answer_c;
        alt4.innerHTML = result[0].answers.answer_d;
      });
  }

  increaseIndex() {
      currentIndex += 1;
    
  }
}
