import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: ['flexibilität', 'flexibel'],
  question3: 'd',
  question4: 'b'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
