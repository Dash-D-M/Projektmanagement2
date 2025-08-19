import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: 'b',
  question3: 'b',
  question4: 'c'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
