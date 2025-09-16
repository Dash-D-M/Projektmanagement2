import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'b',
  question2: 'b',
  question3: 'a',
  question4: ['film and media arts', 'film & media arts', 'film und media arts'],
  question5: 'b',
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
