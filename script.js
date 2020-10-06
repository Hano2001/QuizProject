document.addEventListener("DOMContentLoaded", function (event) {
  let quiz = new Quiz();
  let question = new Questions();
  let correct = new Correct();
  let results = new FinalResults();
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
    question.nextQuestion(quiz.questions, quiz.questionsAmount);
  });
  
  
  let corrBtn = document.getElementById("correct");
  corrBtn.addEventListener("click", function (e) {
    correct.correcting(question.correctAnswers, question.userAnswers, question.mainQuestion, quiz.questionsAmount, question.testAnswers);
  });

  let resultBtn = document.getElementById("result");
  resultBtn.addEventListener("click", function(e){
    results.results(correct.totalAnswers, quiz.questions, quiz.questionsAmount, question.correctAnswers);

    
  })

});
