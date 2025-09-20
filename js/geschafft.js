document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const attempts = params.get('attempts');
  const origin = params.get('origin');

  const attemptText = document.getElementById('attempt-text');
  if (attempts) {
    attemptText.textContent = "Du hast das Quiz beim ";
    
    const bold = document.createElement("b");
    bold.textContent = `${attempts}. Versuch`;
    
    attemptText.appendChild(bold);
    attemptText.append(" abgeschlossen.");
  }

  const infoLink = document.getElementById('info-link');
  const rewardLink = document.getElementById('reward-link');
  const rewardImage = document.getElementById('reward-image');
  const symbol = document.getElementById('symbol');
  const raum = document.getElementById('raum');

  const contentMap = {
    '2D-Animation': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: '',
      symbol: ''
    },
    '3D-Veranstaltungen': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'A112',
      symbol: '-'
    },
    'Spieleprogrammierung': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'A25',
      symbol: 'F'
    },
    'Audioproduktion': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'A13',
      symbol: '$'
    },
    'DesignFilmMarketing': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'A124',
      symbol: 'Q'
    },
    'DigitaleBildbearbeitung': {
      info: { url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/MI', text: 'Studiengang Medieninformatik' },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'A212 (1)',
      symbol: 'Z'
    },
    'Film&MediaArts': {
      info: { url: '#', text: '' },
      reward: { url: 'Goodies/Mobil/Skyline Wallpaper Handy 4K.png', text: 'Wallpaper fuer Film&MediaArts' },
      image: 'Goodies/Mobil/Skyline Wallpaper Handy 4K.png',
      raum: 'A14',
      symbol: '#'
    },
    'GrundlagenGestaltung': {
      info: { url: '#', text: '' },
      reward: { url: 'Goodies/Mobil/Quallen Wallpaper Handy 4K.png', text: 'Digitale Belohnung herunterladen' },
      image: 'Goodies/Mobil/Quallen Wallpaper Handy 4K.png',
      raum: 'A212 (2)',
      symbol: '!'
    },
    'AudioFilmtechnik': {
      info: {
        url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/MI',
        text: 'HSFL Medieninformatik'
      },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'AU4',
      symbol: 'H'
    },
    'VFX': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'A26',
      symbol: 'L'
    },
    'Web-Technologien': {
      info: { url: '#', text: '' },
      reward: { url: '#', text: '' },
      image: '',
      raum: 'A125',
      symbol: 'Z'
    }
  };

 const content = contentMap[origin];
if (content) {
  if (content.info && content.info.url && content.info.url !== '#') {
    const link = document.createElement('a');
    link.href = content.info.url;
    link.textContent = content.info.text || content.info.url;
    link.target = "_blank";
    infoLink.appendChild(link);
  }
  if (content.reward && content.reward.url && content.reward.url !== '#') {
    const link = document.createElement('a');
    link.href = content.reward.url;
    link.textContent = content.reward.text || content.reward.url;
    link.target = "_blank";
    rewardLink.appendChild(link);
  }
  if (content.image) {
    rewardImage.src = content.image;
    rewardImage.style.display = 'block';
  }
  if (content.raum) {
    raum.textContent = content.raum;        
  }
  if (content.symbol) {
    symbol.textContent = content.symbol;    
  }
}

});
