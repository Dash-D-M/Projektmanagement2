import { initQuiz } from './quizBase.js';

const correctAnswers = {
  question1: 'b',
  question2: 'b',
  question3: 'c',
  question4: ['after effects', 'adobe after effects', 'aftereffects', 'adobe after efects', 'after efects', 'adobe after effekts', 'after effekts', 'adobe after efekts', 'after efekts'],
  question5: 'a'
};

document.addEventListener('DOMContentLoaded', () => {
  initQuiz('quiz-form', correctAnswers);
});
