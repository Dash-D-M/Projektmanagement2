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
    '2D-Animation': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    '3D-Veranstaltungen': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'AngewandteInformatik': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'Audioproduktion': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'DesignFilmMarketing': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'DigitaleBildbearbeitung': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'Film&MediaArts': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'GrundlagenGestaltung': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'Medieninformatik': {
      info: {
        url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/MI',
        text: 'HSFL Medieninformatik'
      },
      reward: { url: '#', text: '' },
      image: ''
    },
    'VFX': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    },
    'Web-Technologien': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: ''
    }
  };

  const content = contentMap[origin];
  if (content) {
    if (content.info && content.info.url && content.info.url !== '#') {
      const link = document.createElement('a');
      link.href = content.info.url;
      link.textContent = content.info.text || content.info.url;
      infoLink.appendChild(link);
    }
    if (content.reward && content.reward.url && content.reward.url !== '#') {
      const link = document.createElement('a');
      link.href = content.reward.url;
      link.textContent = content.reward.text || content.reward.url;
      rewardLink.appendChild(link);
    }
    if (content.image) {
      rewardImage.src = content.image;
      rewardImage.style.display = 'block';
    }
  }
});
