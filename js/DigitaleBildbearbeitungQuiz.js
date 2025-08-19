import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: 'd'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
