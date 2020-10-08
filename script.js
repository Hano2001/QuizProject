document.addEventListener("DOMContentLoaded", function (event) {
  let quiz = new Quiz;
  
  let correct = new Correct();
  
  let startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", function (e) {
    quiz.submitInfo();
  });
  let fetchBtn = document.getElementById("fetch");

  fetchBtn.addEventListener("click", function (e) {
    quiz.fetchQuestions(quiz.questionsAmount);
    
  });

  let nextBtn = document.getElementById("next");

  nextBtn.addEventListener("click", function (e) {
    quiz.question.nextQuestion(quiz.questions, quiz.questionsAmount);
   });
  
  
  let corrBtn = document.getElementById("correct");
  corrBtn.addEventListener("click", function (e) {
    correct.correcting(quiz);

    
  });

 

    
  

});
