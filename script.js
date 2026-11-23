
// Contagem regressiva para 25/11/2026 à meia-noite no horário de Brasília (UTC-3).
// A data é fixa para esta surpresa; não depende do fuso horário do visitante.
const birthdayMoment = new Date("2026-11-25T00:00:00-03:00").getTime();
const countdownMessage = document.getElementById("countdown-message");

function updateCountdown() {
  const remaining = birthdayMoment - Date.now();
  if (remaining <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    countdownMessage.textContent = "Chegou o seu dia! Feliz aniversário, meu amor! ♥";
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
window.setInterval(updateCountdown, 1000);

const photos = [

  {src:"assets/foto-01.jpeg", text:"Um daqueles momentos que eu guardaria de novo, mil vezes."},
  {src:"assets/foto-02.jpeg", text:"Você consegue deixar até os momentos mais simples especiais."},
  {src:"assets/foto-03.jpeg", text:"Cada detalhe seu faz eu me apaixonar ainda mais por você."},
  {src:"assets/foto-04.jpeg", text:"Seu sorriso é uma das coisas que eu nunca me canso de admirar."},
  {src:"assets/foto-05.jpeg", text:"Com você, até nossas brincadeiras mais bobas viram boas lembranças."},
  {src:"assets/foto-06.jpeg", text:"Eu amo seu jeitinho, suas manias e tudo aquilo que faz você ser você."},
  {src:"assets/foto-07.jpeg", text:"Mais uma lembrança que tenho muita sorte de poder guardar."},
  {src:"assets/foto-08.jpeg", text:"Que a gente ainda tenha milhares de momentos assim para viver juntos."},
  {src:"assets/foto-09.jpeg", text:"Não importa quantas vezes a gente discorde, eu sempre vou querer você ao meu lado."}
];

let index = 0;
const image = document.getElementById("slide-image");
const caption = document.getElementById("caption");
const current = document.getElementById("current");
const dots = document.getElementById("dots");

photos.forEach((photo, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Ir para foto ${i + 1}`);
  dot.addEventListener("click", () => show(i));
  dots.appendChild(dot);
});

function show(next) {
  index = (next + photos.length) % photos.length;
  image.style.opacity = "0";
  window.setTimeout(() => {
    image.src = photos[index].src;
    caption.textContent = photos[index].text;
    current.textContent = String(index + 1).padStart(2, "0");
    image.style.opacity = "1";
  }, 130);
  [...dots.children].forEach((dot, i) => dot.classList.toggle("active", i === index));
}
document.querySelector(".prev").addEventListener("click", () => show(index - 1));
document.querySelector(".next").addEventListener("click", () => show(index + 1));

let touchStart = 0;
const frame = document.querySelector(".slide-frame");
frame.addEventListener("touchstart", e => touchStart = e.changedTouches[0].screenX, {passive:true});
frame.addEventListener("touchend", e => {
  const delta = e.changedTouches[0].screenX - touchStart;
  if (Math.abs(delta) > 45) show(index + (delta < 0 ? 1 : -1));
}, {passive:true});

document.getElementById("surprise").addEventListener("click", () => {
  const message = document.getElementById("surprise-message");
  message.classList.add("show");
  document.getElementById("surprise").textContent = "Mais um abraço? ♡";
  for (let i = 0; i < 14; i++) setTimeout(makeHeart, i * 100);
});

function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > .5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  document.querySelector(".floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 7200);
}
