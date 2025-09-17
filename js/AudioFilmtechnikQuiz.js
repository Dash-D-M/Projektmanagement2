import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: 'a',
  question3: 'c',
  question4: ['stativ', 'statif', 'schtatif', 'schtativ'],
  question5: 'b'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
