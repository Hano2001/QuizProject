document.addEventListener("DOMContentLoaded", function (event) {
    let quiz = new Quiz();
    
        let startBtn = document.getElementById("startBtn");

        startBtn.addEventListener("click", function(e)
        {
            quiz.submitName();
        })
        let testBtn = document.getElementById("test");
        

        testBtn.addEventListener("click", function(e)
        {   
            quiz.fetchQuestions(quiz.questionsAmount);
            //quiz.counter(quiz.amount);
        })

        let nextBtn = document.getElementById("next");

        /*nextBtn.addEventListener("click", function(e)
        {
            quiz.question();
        })*/
    

});