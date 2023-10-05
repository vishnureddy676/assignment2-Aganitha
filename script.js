
const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Hyderabad", "kolkata", "banglore", "Delhi"],
        correctAnswer: "Delhi",
  
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Paris", "Rome", "London"],
      correctAnswer: "Berlin",
    },
    {
      question: "Which city is the capital of Spain?",
      options: ["Lisbon", "Barcelona", "Madrid", "Amsterdam"],
      correctAnswer: "Madrid",
    },
    {
      question: "What is the capital of Italy?",
      options: ["Athens", "Vienna", "Rome", "Prague"],
      correctAnswer: "Rome",
    },
    
    {
        question: "What is the capital of USA?",
        options: ["washington dc", "newyork", "sanfransisco", "florida"],
        correctAnswer: "washington dc",
  
      },
    
  ];
  
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const feedbackText = document.getElementById("feedback-text");

// Function to load the next question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Clear previous options
    optionsList.innerHTML = "";

    // Create and append options
    currentQuestion.options.forEach((option) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkAnswer(option));
        optionsList.appendChild(li);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        feedbackText.textContent = "Correct!";
    } else {
        feedbackText.textContent = "Wrong. The correct answer is: " + currentQuestion.correctAnswer;
    }

    // Disable options after selection
    const options = optionsList.querySelectorAll("li");
    options.forEach((option) => {
        option.removeEventListener("click", () => checkAnswer(option.textContent));
        option.style.pointerEvents = "none";
    });

    // Show the "Next Question" button
    document.getElementById("next-button").style.display = "block";
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        feedbackText.textContent = "";
        document.getElementById("next-button").style.display = "none";
    } else {
        // Display the final score
        questionText.textContent = `Quiz completed. Your score: ${score}/${quizData.length}`;
        optionsList.innerHTML = "";
        feedbackText.textContent = "";
        document.getElementById("next-button").style.display = "none";
    }
}

// Simulate loading the first question after a delay (e.g., 2 seconds)
setTimeout(() => {
    loadQuestion();
}, 2000);
