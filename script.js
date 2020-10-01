document.addEventListener("DOMContentLoaded", function (event) {
  console.log(quest);
  let quiz = new Quiz();

  let startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", quiz.submitName)
  
  let testBtn = document.getElementById("test");

  testBtn.addEventListener("click", quiz.fetchQuestions);

  let nextBtn = document.getElementById("next");

  
});
