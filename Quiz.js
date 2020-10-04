class Quiz {
  constructor(name, questionsAmount) {
    this.name = name;
    this.questionsAmount = questionsAmount;
    
    this.questions = [];
    
    
    //let question = new Questions(this.questionsAmount,this.questions);
  }

  submitInfo() {
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

        
        
        

        

        
      
      
  })
  

   
  
}
}