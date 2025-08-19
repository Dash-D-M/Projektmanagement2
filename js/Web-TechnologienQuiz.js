import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: 'a',
  question3: 'b',
  question4: ['rough animator', 'roughanimator'],
  question5: 'b',
  question6: ['flexibilität', 'flexibel'],
  question7: 'd',
  question8: 'b'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
