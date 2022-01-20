const quizData = [
    {
        question: 'What is the full-form of USA?',
        a: 'U start again',
        b: 'United States of Africa',
        c: 'Unite solo Agent',
        d: 'United States of America',
        correct: 'd'
    },
    {
        question: 'The most used programming language in 2021 is...',
        a: 'Python',
        b: 'Java',
        c: 'C++',
        d: 'C',
        correct: 'b'
    },
    {
        question: 'The capital of USA is...',
        a: 'Washington',
        b: 'Texas',
        c: 'Georgia',
        d: 'New York',
        correct: 'd',
    },
    {
        question: 'Computer is a...',
        a: 'Machine',
        b: 'Animal',
        c: 'Human',
        d: 'Bird',
        correct: 'a',
    },
    {
        question: 'HTML is a...',
        a: 'Markup language',
        b: 'French language',
        c: 'English language',
        d: 'Sign language',
        correct: 'a'
    }
]

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const answerEl = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

// function to load quiz data into the html element
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

loadQuiz();

const getSelected = () => {
    let answer = undefined;

    answerEl.forEach(ans => {
        if (ans.checked) {
            answer = ans.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEl.forEach(ans => {
        ans.checked = false;
    });
}

// loading the next question when submit btn is clicked
submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;

            if (score.length === (quizData.length + 1)) {
                return `<h1>BINGO</h1>`
            }
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions</h2>`;
        }
    }





})