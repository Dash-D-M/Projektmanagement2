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
      image: '#',
      symbol: ''
    },
    '3D-Veranstaltungen': {
      info: { url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/AI', text: 'Studiengang: Angewandte Informatik' },
      reward: { url: 'Goodies/3D-Veranstaltungen/3D-Veranstaltungen Goodies.zip', text: '' },
      images: [
              'Goodies/3D-Veranstaltungen/Laptop Wallpaper Handy 4K.png',
              'Goodies/3D-Veranstaltungen/Krabbe Sticker.png',
      ],
      raum: 'A112',
      symbol: '-'
    },
    'Spieleprogrammierung': {
      info: { url: '#', text: '' },
      reward: { url: 'Goodies/Spieleprogrammierung/Spieleprogrammierung Goodies.zip', text: '' },
      images: [
              'Goodies/Spieleprogrammierung/Gaming Wallpaper Handy 4K.png',
              'Goodies/Spieleprogrammierung/Katze Sticker.png',

      ],

      raum: 'A25',
      symbol: 'F'
    },
    'Audioproduktion': {
      info: { url: '#', text: '' },
      reward: { url: 'Goodies/Audioproduktion/Audioproduktion.zip', text: '' },
      images: [
        'Goodies/Audioproduktion/Welli Wallpaper Handy 4K.png',
        'Goodies/Audioproduktion/Herz Sticker.png',


      ],
      raum: 'A13',
      symbol: '$'
    },
    'DesignFilmMarketing': {
      info: { url: '#', text: '' },
      reward: { url: 'Goodies/DesignFilmMarketing/DesignFilmMarketing Goodies.zip', text: '' },
      images: [
              'Goodies/DesignFilmMarketing/Wallpaper Strandkiste Handy 4K.png',
              'Goodies/DesignFilmMarketing/WideHoodieWhite.gif',

      ],
      raum: 'A124',
      symbol: 'Q'
    },
    'DigitaleBildbearbeitung': {
      info: { url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/MI', text: 'Studiengang Medieninformatik' },
      reward: { url: 'Goodies/DigitaleBildbearbeitung/DDB Goodies.zip', text: '' },
      images: [
              'Goodies/DigitaleBildbearbeitung/Wallpaper Blüte Handy 4K.png',
              'Goodies/DigitaleBildbearbeitung/Tiere Sticker.png',
      ],
      raum: 'A212 (1)',
      symbol: 'Z'
    },
    'Film&MediaArts': {
      info: { url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/B-FMA', text: 'Studiengang: Film & media Arts' },
      reward: { url: 'Goodies/FilmMediaArts/Film&MediaArts Goodies.zip', text: 'Wallpaper fuer Film&MediaArts' },
      images: [
              'Goodies/FilmMediaArts/Skyline Wallpaper Handy 4K.png',
              'Goodies/FilmMediaArts/QR-Rallye.png',
      ],
              
      
      raum: 'A14',
      symbol: '#'
    },
    'GrundlagenGestaltung': {
      info: { url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/MI', text: '' },
      reward: { url: 'Goodies/GrundlagenGestaltung/GrundlagenGestaltung Goodies.zip', text: 'Digitale Belohnung herunterladen' },
      images: [
              'Goodies/GrundlagenGestaltung/Tetris Wallpaper Handy 4K.png',
              'Goodies/GrundlagenGestaltung/Slim HoodieWhite.gif',
      ],
              
      raum: 'A212 (2)',
      symbol: '!'
    },
    'AudioFilmtechnik': {
      info: {
        url: 'https://hs-flensburg.de/studieninteressierte/angebot/bachelor/MI',
        text: 'HSFL Medieninformatik'
      },
      reward: { url: 'Goodies/AudioFilmtechnik/AudioFilmtechnik.zip', text: '' },
      images: [
        'Goodies/AudioFilmtechnik/Quallen Wallpaper Handy 4K.png',
        'Goodies/AudioFilmtechnik/WideHoodieBlack.gif',],

      raum: 'AU4',
      symbol: 'H'
    },
    'VFX': {
      info: { url: '#', text: '' },
      reward: { url: 'Goodies/VFX/VFX Goodies.zip', text: '' },
      images: [
              'Goodies/VFX/Schaltkreis Wallpaper Handy 4K.png',
              'Goodies/VFX/SlimHoodieBlack.gif'],

      raum: 'A26',
      symbol: 'L'
    },
    'Web-Technologien': {
      info: { url: '#', text: '' },
      reward: { url: 'Goodies/Web-Technologien/Web-Technologien Goodies.zip', text: '' },
      images: [
              'Goodies/Web-Technologien/Bücherregal Wallpaper Handy 4K.png',
              'Goodies/Web-Technologien/Eule Sticker.png',
      ],
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
  if (content.images && Array.isArray(content.images)) {
    content.images.forEach(imgUrl => {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = 'Belohnung';
      img.style.maxWidth = '100%';
      img.style.display = 'block';
      img.style.margin = '16px auto';
      rewardLink.appendChild(img);
    });
    
  } else if (content.image) {
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
