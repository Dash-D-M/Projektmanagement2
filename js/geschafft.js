document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const attempts = params.get('attempts');
  const origin = params.get('origin');

  const attemptText = document.getElementById('attempt-text');
  if (attempts) {
    attemptText.textContent = `Du hast das Quiz beim ${attempts}. Versuch abgeschlossen.`;
  }

  const infoLink = document.getElementById('info-link');
  const rewardLink = document.getElementById('reward-link');
  const rewardImage = document.getElementById('reward-image');

  const contentMap = {
    '2D-Animation': { info: '#', reward: '#', image: '' },
    '3D-Veranstaltungen': { info: '#', reward: '#', image: '' },
    'AngewandteInformatik': { info: '#', reward: '#', image: '' },
    'Audioproduktion': { info: '#', reward: '#', image: '' },
    'DesignFilmMarketing': { info: '#', reward: '#', image: '' },
    'DigitaleBildbearbeitung': { info: '#', reward: '#', image: '' },
    'Film&MediaArts': { info: '#', reward: '#', image: '' },
    'GrundlagenGestaltung': { info: '#', reward: '#', image: '' },
    'Medieninformatik': { info: '#', reward: '#', image: '' },
    'VFX': { info: '#', reward: '#', image: '' },
    'Web-Technologien': { info: '#', reward: '#', image: '' }
  };

  const content = contentMap[origin];
  if (content) {
    if (content.info && content.info !== '#') {
      const link = document.createElement('a');
      link.href = content.info;
      link.textContent = content.info;
      infoLink.appendChild(link);
    }
    if (content.reward && content.reward !== '#') {
      const link = document.createElement('a');
      link.href = content.reward;
      link.textContent = content.reward;
      rewardLink.appendChild(link);
    }
    if (content.image) {
      rewardImage.src = content.image;
      rewardImage.style.display = 'block';
    }
  }
});
