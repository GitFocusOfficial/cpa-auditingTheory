const questions = [
    {
        question: "What is the capital of United Kingdom?",
        choices: ["London", "Paris", "Nairobi", "Brazil", "Great Britain"],
        correct: 0
    },
    {
        question: "How many days are there in a week?",
        choices: ["Five", "Three", "Seven", "Four", "Six"],
        correct: 2
    },
    {
        question: "What is the closest planet to the sun?",
        choices: ["Earth", "Mercury", "Saturn", "Mars", "Jupiter"],
        correct: 1
    },
    // Add more question start here...
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "Correct";
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect";
    }


setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
    }, 2000);
}

showQuestion();