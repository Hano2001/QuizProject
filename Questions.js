class Questions {
    constructor(){
        this.currentIndex = -1;
    }
    
    
    
    
    
    nextQuestion() {
        this.currentIndex += 1;
        inputAmount.innerHTML = this.currentIndex + "/" + this.questionsAmount;
        let alt1 = document.getElementById("alt1");
        let alt2 = document.getElementById("alt2");
        let alt3 = document.getElementById("alt3");
        let alt4 = document.getElementById("alt4");
    
        quest.innerHTML =
          this.currentIndex + this.questions[this.currentIndex].question;
    
        alt1.innerHTML = this.questions[this.currentIndex].answers.answer_a;
        alt2.innerHTML = this.questions[this.currentIndex].answers.answer_b;
        alt3.innerHTML = this.questions[this.currentIndex].answers.answer_c;
        alt4.innerHTML = this.questions[this.currentIndex].answers.answer_d;
      }
    
      previousQuestion() {
        this.currentIndex -= 1;
    
        inputAmount.innerHTML = this.currentIndex + "/" + this.questionsAmount;
        let alt1 = document.getElementById("alt1");
        let alt2 = document.getElementById("alt2");
        let alt3 = document.getElementById("alt3");
        let alt4 = document.getElementById("alt4");
    
        quest.innerHTML =
          this.currentIndex + this.questions[this.currentIndex].question;
    
        alt1.innerHTML = this.questions[this.currentIndex].answers.answer_a;
        alt2.innerHTML = this.questions[this.currentIndex].answers.answer_b;
        alt3.innerHTML = this.questions[this.currentIndex].answers.answer_c;
        alt4.innerHTML = this.questions[this.currentIndex].answers.answer_d;
      }
}