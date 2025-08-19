import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: '3',
  question2: 'a',
  question3: 'c',
  question4: 'd',
  question5: 'd',
  question6: 'b',
  question7: 'c',
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
