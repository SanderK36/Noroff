const messages = [
  "Hei hjertemitt❤️",
  "Jeg veit det ikke ble en valentine som vi håpet på...",
  "Unnskyld for at jeg ikke fikk gjort noe spesielt for deg i dag...",
  "Jeg håper vi fortsatt kan kose oss sammen i kveld...",
  "Du fortjener alt det beste og jeg er takknemlig for alt du gjør for meg...",
  "Jeg elsker deg mer enn noe annet❤️",
  "Så jeg spør deg en siste gang...",
  "Vil du være min valentine?"
];

let index = 0;
const messageEl = document.getElementById("message");
const buttonsEl = document.getElementById("buttons");
const finalEl   = document.getElementById("final");
const noBtn     = document.getElementById("no");
const yesBtn    = document.getElementById("yes");
const yesText   = document.getElementById("yes-text");

function showNextMessage() {
  if (index < messages.length) {
    messageEl.textContent = messages[index];
    messageEl.classList.add("visible");
    index++;
    setTimeout(showNextMessage, 4200); // raskere enn før
  } else {
    setTimeout(() => {
      buttonsEl.classList.add("visible");
    }, 600); // dukker opp raskere etter siste melding
  }
}

setTimeout(showNextMessage, 800);

// Nei-knappen hopper mye mer rundt
noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth > 600 ? 600 : 350;   // større bevegelser
  const maxY = window.innerHeight > 800 ? 450 : 250;
  
  const x = (Math.random() - 0.5) * maxX;
  const y = (Math.random() - 0.5) * maxY;
  const rot = (Math.random() * 80 - 40); // mer rotasjon
  
  noBtn.style.setProperty("--x", x + "px");
  noBtn.style.setProperty("--y", y + "px");
  noBtn.style.setProperty("--rot", rot + "deg");
});

// Ja → hjerte → final
yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("heart-mode");
  yesText.textContent = "❤️";

  noBtn.style.pointerEvents = "none";
  noBtn.style.opacity = "0.35";

  yesBtn.style.transition = "all 0.6s ease";
  yesBtn.style.transform = "scale(1.5)";
  setTimeout(() => {
    yesBtn.style.transform = "scale(1)";
  }, 500);

  setTimeout(() => {
    messageEl.style.opacity = "0";
    buttonsEl.style.opacity = "0";
    setTimeout(() => {
      messageEl.style.display = "none";
      buttonsEl.style.display = "none";
      finalEl.classList.remove("hidden");
      finalEl.classList.add("visible");
    }, 800);
  }, 1200);
});

yesBtn.addEventListener("touchstart", e => {
  e.preventDefault();
  yesBtn.click();
});

// Hjerte-generator (uendret)
function spawnHeart() {
  const container = document.querySelector('.hearts-container');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  const left = Math.random() * 100;
  heart.style.left = left + 'vw';

  const rot = (Math.random() * 180 - 90) + 'deg';
  const sway = (Math.random() * 140 - 70) + 'px';
  heart.style.setProperty('--rot', rot);
  heart.style.setProperty('--sway', sway);

  const duration = 12 + Math.random() * 9;
  heart.style.animationDuration = duration + 's';

  container.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

for (let i = 0; i < 10; i++) {
  setTimeout(spawnHeart, i * 1800 + Math.random() * 3000);
}

setInterval(() => {
  if (document.querySelectorAll('.heart').length < 12) {
    spawnHeart();
  }
}, 2800);