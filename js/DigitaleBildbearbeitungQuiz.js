import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'a',
  question2: 'd',
  question3: ['Photoshop', 'Fotoshop', 'Fotoschop', 'Photoschop'],
  question4: 'c',
  question5: 'd'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
