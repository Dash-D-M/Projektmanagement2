import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: '210',
  question2: 'b',
  question3: 'd',
  question4: 'd',
  question5: 'a'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
