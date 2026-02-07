function entrar() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("spotify").classList.remove("hidden");
}

/* TEMPO JUNTOS */
const inicio = new Date("2025-11-08T17:00:00");

function atualizarTempo() {
  const agora = new Date();
  let diff = agora - inicio;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  anosEl.innerText = anos;
  mesesEl.innerText = meses;
  diasEl.innerText = dias;
  horasEl.innerText = horas;
  minutosEl.innerText = minutos;
  segundosEl.innerText = segundos;
}

const anosEl = document.getElementById("anos");
const mesesEl = document.getElementById("meses");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

setInterval(atualizarTempo, 1000);
atualizarTempo();

/* BARRA FAKE */
let progress = 0;
setInterval(() => {
  progress += 0.3;
  if (progress > 100) progress = 0;
  document.getElementById("fill").style.width = progress + "%";
}, 1000);
