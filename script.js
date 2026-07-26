let kayo = document.getElementById('kayo');
const speakaudio = new Audio('kayoko/Kayoko_Speaking1.ogg');
const flusteraudio = new Audio('kayoko/Kayoko_fluster.ogg');
const pokeaudio = new Audio('kayoko/Kayoko_poke.ogg');

const kayofluster = 'kayoko/kayokoflustered.png';
const kayopoke = 'kayoko/Kayoko_poke.png';
const kayoko = 'kayoko/Kayoko_Portrait.png';

kayo.addEventListener('click', poke);
kayo.addEventListener('animationend', () => {
  kayo.classList.remove('jump', 'shake');
});

function poke() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);

  if (randomNumber > 1) {
    kayo.classList.remove('jump', 'shake');
    kayo.src = kayopoke;
    pokeaudio.currentTime = 0;
    pokeaudio.play();
    void kayo.offsetWidth;
    kayo.classList.add('jump');
    setTimeout(() => {
      kayo.src = kayopoke;
      const randomDelay = 500 + Math.random() * 1500;
      setTimeout(() => {
        kayo.src = kayoko;
      }, randomDelay);
    }, 200);
  } else if (randomNumber == 1) {
    kayo.classList.remove('jump', 'shake');
    flusteraudio.currentTime = 0;
    flusteraudio.play();
    void kayo.offsetWidth;
    kayo.src = kayofluster;
    kayo.classList.add('shake');
    setTimeout(() => {
      kayo.src = kayofluster;
      const randomDelay = 500 + Math.random() * 1500;
      setTimeout(() => {
        kayo.src = kayoko;
      }, randomDelay + 10000);
    }, 200);
  }
}
