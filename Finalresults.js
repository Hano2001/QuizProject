class FinalResults{
    constructor(question, answerA, answerB, answerC, answerD, answerE, answerF)
    {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.answerE = answerE;
        this.answerF = answerF;

        
    }

    results(totalAnswers, questions, correctValue)
    {   let index = -1;
        index += 1;
        document.getElementById("quest").textContent = totalAnswers[index].Question;
        document.getElementById("alt1").textContent = questions[index].answers.answer_a
        document.getElementById("alt2").textContent = questions[index].answers.answer_b
        document.getElementById("alt3").textContent = questions[index].answers.answer_c
        document.getElementById("alt4").textContent = questions[index].answers.answer_d
        document.getElementById("alt5").textContent = questions[index].answers.answer_e
        document.getElementById("alt6").textContent = questions[index].answers.answer_f
        

        
        console.log(correctValue[index]);
        
         
        if (questions[index].correct_answers.answer_a === "true"){
        document.getElementById("alt1").className="right";
        }
        

        


    }

}