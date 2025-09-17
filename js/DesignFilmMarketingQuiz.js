import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: ['vorlesung', 'vorlesungen'],
  question2: 'a',
  question3: 'c',
  question4: 'c',
  question5: 'b'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
