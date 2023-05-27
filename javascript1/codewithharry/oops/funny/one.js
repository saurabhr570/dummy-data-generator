const questions = [
    {
      question: "What is my favorite mithai?",
      options: ["Rasgulle", "mishri mawa", "rasmalai", "kajukaatli"],
      answer: 2
    },
    {
      question: "What is my fav. vegetable?",
      options: ["sahi paneer", "butter paneer", "paneer do pyaza", "kdhai paneer"],
      answer: 3
    },
    {
      question: "where i am going to take you for honeymoon after our marriage?",
      options: ["bali", "phillipians", "andman and nicobar", "kullu manali"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result-container");
  const submitButton = document.getElementById("submit-btn");
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";
    
    for (let i = 0; i < question.options.length; i++) {
      const optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.textContent = question.options[i];
      optionButton.addEventListener("click", selectOption);
      optionsContainer.appendChild(optionButton);
    }
  }
  
  function selectOption(e) {
    const selectedOption = e.target;
    const question = questions[currentQuestion];
    const answerIndex = question.answer;
    
    if (selectedOption.textContent === question.options[answerIndex]) {
      score++;
    }
    
    disableOptions();
    submitButton.disabled = false;
  }
  
  function disableOptions() {
    const optionButtons = document.getElementsByClassName("option");
    
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].disabled = true;
    }
  }
  
  function showResult() {
    questionElement.textContent = "";
    optionsContainer.innerHTML = "";
    submitButton.disabled = true;
    
    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
  }
  
  submitButton.addEventListener("click", () => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  loadQuestion();
  