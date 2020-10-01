document.addEventListener("DOMContentLoaded", function (event) {
  console.log(quest);
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
            
        })

  let nextBtn = document.getElementById("next");

  
});
