const quizData = [
  {
    questions: 'How are you, men?',
    a: 'fine',
    b: 'good',
    c: 'great',
    d: 'awasome',
    correct: 'd'
  },   {
    questions: 'it is a good day for you?',
    a: 'fine',
    b: 'good',
    c: 'great',
    d: 'awasome',
    correct: 'b'
  },   {
    questions: 'how do you feel today?',
    a: 'fine',
    b: 'good',
    c: 'great',
    d: 'awasome',
    correct: 'a'
  },   {
    questions: 'how much do you study today?',
    a: 'fine',
    b: 'good',
    c: 'great',
    d: 'awasome',
    correct: 'c'
  },   {
    questions: 'how do you express you fellings about this moment?',
    a: 'fine',
    b: 'good',
    c: 'great',
    d: 'awasome',
    correct: 'd'
  },   {
    questions: 'how is your sunday usually going?',
    a: 'fine',
    b: 'good',
    c: 'great',
    d: 'awasome',
    correct: 'b'
  }
];

const questionsEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submitButton')

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  cleanUpRadio()
  const currentQuizData = quizData[currentQuiz]
  questionsEL.innerHTML = currentQuizData.questions;
  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b
  c_text.innerHTML = currentQuizData.c
  d_text.innerHTML = currentQuizData.d
  
  console.log(currentQuizData)
}

function getSelectedQuiz() {
  const answerELS = document.querySelectorAll('.answer')
  let answer = undefined
  answerELS.forEach((answerEL) => {
    if(answerEL.checked) {
      answer = answerEL.id
      console.log(answer)
    }
  })
  return answer
  
}

function cleanUpRadio() {
  const answerELS = document.querySelectorAll('.answer')
  answerELS.forEach((answerEL) => {
    answerEL.checked = false

  }) 
}

submitButton.addEventListener("click", () => {
  const answer = getSelectedQuiz()
  console.log(answer)
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }
      console.log(score)
      currentQuiz++
      if(currentQuiz < quizData.length) {
        loadQuiz();
    
      } else {
        let quiz = document.getElementById('quiz')
        quiz.innerHTML = `<h2>CONGRAS!!! 
        Your score is ${score}/6</h2>`
      }

  }


})
loadQuiz()