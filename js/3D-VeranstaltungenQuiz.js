import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: 'b',
  question3: 'b',
  question4: 'c',
  question5: 'd'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
