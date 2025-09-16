import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'b',
  question2: 'b',
  question3: 'a',
  question4: 'd',
  question5: 'b',
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
