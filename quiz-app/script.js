const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text:"Shark", correct: false},
            {Text:"Blue whale", correct: true},
            {Text:"Elephant", correct: false},
            {Text:"Giraffe", correct: false}
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text:"Shark", correct: false},
            {Text:"Blue whale", correct: true},
            {Text:"Elephant", correct: false},
            {Text:"Giraffe", correct: false}
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text:"Shark", correct: false},
            {Text:"Blue whale", correct: true},
            {Text:"Elephant", correct: false},
            {Text:"Giraffe", correct: false}
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {Text:"Shark", correct: false},
            {Text:"Blue whale", correct: true},
            {Text:"Elephant", correct: false},
            {Text:"Giraffe", correct: false}
        ]
    }
];

const questionElement = document.getElementById("#question");
const answerButton = document.getElementById("#answer-buttons");
const nextButton = document.getElementById("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();

