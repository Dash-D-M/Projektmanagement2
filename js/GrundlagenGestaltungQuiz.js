import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'd',
  question2: ['flexibilität', 'flexibel', 'flexibilitaet'],
  question3: 'd',
  question4: 'b',
  question5: 'a'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
