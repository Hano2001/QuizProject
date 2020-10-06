class Quiz {
  constructor() {
    this.name = "";
    this.questionsAmount = 0;
    
    this.questions = [];
    
    
    
  }

  submitInfo() {
    let inputAmount = document.getElementById("inputAmount");
    let userName = document.getElementById("userName");
    this.name = window.prompt("Vad heter du?");
    this.questionsAmount = window.prompt("Hur många frågor? (5-10)");
    if(this.questionsAmount > 10)
    {
      alert("Du angav för många frågor. Tio är max, du får svara på tio frågor.")
      this.questionsAmount = 10;
    }

    if (this.questionsAmount < 5)
    {
      alert("Du angav för få frågor. Fem är minst godkänt. Du får svara på fem frågor")
      this.questionsAmount = 5;
    }
    inputAmount.innerHTML = this.questionsAmount;
    userName.innerHTML = this.name;
    return //this.questionsAmount;
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
        
        return this.questions, this.questionsAmount;

        
        
        

        

        
      
      
  })
  

   
  
}
}