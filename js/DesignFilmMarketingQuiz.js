import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: '3',
  question2: 'a',
  question3: 'c',
  question4: 'c',
  question5: 'b'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
