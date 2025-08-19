import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: '210',
  question2: 'b'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
