class Quiz {
  constructor(name, questionsAmount) {
    this.name = name;
    this.questionsAmount = questionsAmount;
    this.score = 0;
  }

  submitName() {
    let inputAmount = document.getElementById("inputAmount");
    let userName = document.getElementById("userName");
    this.name = window.prompt("Vad heter du?");
    this.questionsAmount = window.prompt("Hur många frågor? (5-10)");
    inputAmount.innerHTML = this.questionsAmount;
    userName.innerHTML = this.name;
  }

  fetchQuestions() {
    let amount = this.questionAmount;
    console.log(amount);
    fetch(
      "https://quizapi.io/api/v1/questions?apiKey=KKWjowvjvm8ginRJqxe6NsYhsyLuecmF7p8JMfJ3&limit=" +
        amount
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        
       
        let array = [];

        for (let i = 0; i < result.length; i ++)
        {
            array[i] = result[i];
        }
        
        quest.innerHTML = array[0].question;
        
        //console.log(result[0].answers.answer_a);
        alt1.innerHTML = array[0].answers.answer_a;
        alt2.innerHTML = array[0].answers.answer_b;
        alt3.innerHTML = array[0].answers.answer_c;
        alt4.innerHTML = array[0].answers.answer_d;
         // Counter(inputAmount)
        // {
        // let qAmount = 0;
        // qAmount += 1;
        

        // inputAmount.innerHTML = "Fråga:" + qAmount + "/" + amount;

        // }

      });
  }

//   question(questionAmount, result) {
//     for (let i = 0; i <= questionAmount; i++) {
//       quest.innerHTML = result[i].question;

//       alt1.innerHTML = result[i].answers.answer_a;
//       alt2.innerHTML = result[i].answers.answer_b;
//       alt3.innerHTML = result[i].answers.answer_c;
//       alt4.innerHTML = result[i].answers.answer_d;
//     }
//   }
}
