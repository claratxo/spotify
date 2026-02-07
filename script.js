document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("start-btn");
  const finalBtn = document.getElementById("final-btn");

  startBtn.addEventListener("click", () => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("spotify").classList.remove("hidden");
  });

  finalBtn.addEventListener("click", () => {
    document.getElementById("final-screen").classList.remove("hidden");
  });

});

/* CONTADOR */
const inicio = new Date("2025-11-08T17:00:00");

function atualizarTempo() {
  const agora = new Date();
  const diff = agora - inicio;

  document.getElementById("segundos").innerText = Math.floor(diff / 1000) % 60;
  document.getElementById("minutos").innerText = Math.floor(diff / 60000) % 60;
  document.getElementById("horas").innerText = Math.floor(diff / 3600000) % 24;
  document.getElementById("dias").innerText = Math.floor(diff / 86400000) % 30;
  document.getElementById("meses").innerText = Math.floor(diff / (86400000 * 30)) % 12;
  document.getElementById("anos").innerText = Math.floor(diff / (86400000 * 365));
}

setInterval(atualizarTempo, 1000);
atualizarTempo();

/* BARRA FAKE */
let progress = 0;
setInterval(() => {
  progress += 0.3;
  if (progress > 100) progress = 0;
  document.getElementById("fill").style.width = progress + "%";
}, 1000);

/* LETRAS */
const lyrics = [
  "There was something about you",
  "I miss you, I'm sorry",
  "Do you think I have forgotten?",
  "Something about you"
];

let i = 0;
setInterval(() => {
  const el = document.getElementById("lyric");
  el.style.opacity = 0;

  setTimeout(() => {
    el.innerText = lyrics[i];
    el.style.opacity = 1;
    i = (i + 1) % lyrics.length;
  }, 1000);
}, 5000);
