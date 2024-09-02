
const questions = [
    {
        question: "What is the capital of India?",
        options: ["Puri", "Goa", "New Delhi", "Odisha"],
        answer: "New Delhi"
    },
    {
        question: "Largest coffee producing state in indiat?",
        options: ["Manipur", "Meghalaya", "Assam", "Karnataka"],
        answer: "Karnataka"
    },
    {
        question: "Loktak lake is situated in which state?",
        options: ["Manipur", "Odisha", "Bihar", "Telangana"],
        answer: "Manipur"
    },
    {
        question: "A. P. J. Abdul Kalam birth place?",
        options: ["Bihar", "Kerala", "Rameswaram", "Karnataka"],
        answer: "Rameswaram"
    },
     
    {
        question: "How many district in Odisha?",
        options: ["37", "29", "31", "30"],
        answer: "30"
    },
    {
        question: "Who built the temple of Konark?",
        options: ["Loka Vigraha ", "Indra Varma", "King Narasimha Deva I", "Dibyasingha Deba"],
        answer: "King Narasimha Deva I"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');
const skipButton = document.getElementById('skip');
const scoreContainer = document.getElementById('score-container');

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${question.question}</h2>`;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, button));
        questionContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, selectedButton) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const buttons = Array.from(questionContainer.querySelectorAll('button'));
    
    buttons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button === selectedButton) {
            button.classList.add('incorrect');
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
    }

    nextButton.disabled = false;
}

function updateScore() {
    scoreContainer.textContent = `Score: ${score}`;
}

function showFinalScore() {
    questionContainer.innerHTML = `<h2>Quiz Over!</h2><p>Your final score is ${score} out of ${questions.length}</p>`;
    nextButton.style.display = 'none';
    skipButton.style.display = 'none';
}

function skipQuestion() {
    nextButton.disabled = false; // Allow moving to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showFinalScore();
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButton.disabled = true;
    } else {
        showFinalScore();
    }
});

skipButton.addEventListener('click', () => {
    skipQuestion();
});

// Initialize the quiz
displayQuestion();
nextButton.disabled = true;
skipButton.disabled = false;
