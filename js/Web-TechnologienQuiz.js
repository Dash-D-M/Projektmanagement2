import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'b',
  question2: 'a',
  question3: 'c',
  question4: 'd',
  question5: 'a'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
