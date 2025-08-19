import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: ['rough animator', 'roughanimator'],
  question3: 'b',
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
