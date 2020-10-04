class Correct {
  constructor() {
    this.points = 0;
    this.answerAmount = 0;
    this.totalAnswers = [];
  }
  correctAnswers(answers, answers2, mainQuestion, correctValue) {
    let box = document.getElementById("question");
    let corrBtn = document.createElement("button");
    corrBtn.innerHTML = "testknapp";
    corrBtn.id="test";
    box.appendChild(corrBtn);
    let testb = document.getElementById("test")
    testb.addEventListener("click",function (e)
    {
      console.log("HEj HEj")
    })
    answers.splice(0, 2);
    answers2.splice(0, 2);
    for (let i = 0; i < answers.length; i++) {
      this.totalAnswers[i] = {
        Question: mainQuestion[i],
        "CorrectAnswer?": answers[i],
        userAnswer: answers2[i], 
        
        
      };
      console.log(this.totalAnswers); //[value of user answer, alt answered]
    }
    //this.totalAnswers.splice(0,2);
    
    
  }
}
