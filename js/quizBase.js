export function insertButton(formId, label = 'Auswerten', onClick) {
  const form = document.getElementById(formId);
  if (!form) return null;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = label;
  form.appendChild(button);
  button.addEventListener('click', onClick);
  return button;
}

export function collectAnswers(formId) {
  const form = document.getElementById(formId);
  const answers = {};
  if (!form) return answers;
  const elements = Array.from(form.elements);
  elements.forEach(el => {
    if (!el.name) return;
    if (el.type === 'radio') {
      if (el.checked) answers[el.name] = el.value;
    } else if (el.type === 'text') {
      answers[el.name] = el.value.trim().toLowerCase();
    }
  });
  return answers;
}

export function evaluateAnswers(answers, correctAnswers) {
  let score = 0;
  const keys = Object.keys(correctAnswers);
  keys.forEach(key => {
    if (answers[key] === correctAnswers[key]) score++;
  });
  return { score, total: keys.length };
}

export function initQuiz(formId, correctAnswers) {
  insertButton(formId, 'Auswerten', () => {
    const answers = collectAnswers(formId);
    const result = evaluateAnswers(answers, correctAnswers);
    if (result.score < result.total) {
      showResultPopup(result.score, result.total);
    } else {
      alert('Glückwunsch! Du hast alle Fragen richtig beantwortet.');
    }
  });
}

function showResultPopup(score, total) {
  const overlay = document.createElement('div');
  overlay.className = 'quiz-modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'quiz-modal';

  const close = document.createElement('span');
  close.className = 'quiz-modal-close';
  close.innerHTML = '&times;';
  close.addEventListener('click', () => document.body.removeChild(overlay));

  const message = document.createElement('p');
  message.textContent = `Du hast ${score} / ${total} Fragen richtig beantwortet. Versuche es noch einmal!`;

  modal.appendChild(close);
  modal.appendChild(message);
  overlay.appendChild(modal);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) document.body.removeChild(overlay);
  });

  document.body.appendChild(overlay);
}
