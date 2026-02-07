function entrar() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("spotify").classList.remove("hidden");
}

/* TEMPO JUNTOS */
const inicio = new Date("2025-11-08T17:00:00");

// Declare as variáveis dos elementos antes de usar na função
const anosEl = document.getElementById("anos");
const mesesEl = document.getElementById("meses");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function atualizarTempo() {
  const agora = new Date();
  let diff = agora - inicio;

  if (diff < 0) {
    // Se a data for futura, mostra 0
    if (anosEl) anosEl.innerText = 0;
    if (mesesEl) mesesEl.innerText = 0;
    if (diasEl) diasEl.innerText = 0;
    if (horasEl) horasEl.innerText = 0;
    if (minutosEl) minutosEl.innerText = 0;
    if (segundosEl) segundosEl.innerText = 0;
    return;
  }

  // Cálculo mais preciso
  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  if (anosEl) anosEl.innerText = anos;
  if (mesesEl) mesesEl.innerText = meses;
  if (diasEl) diasEl.innerText = dias;
  if (horasEl) horasEl.innerText = horas;
  if (minutosEl) minutosEl.innerText = minutos;
  if (segundosEl) segundosEl.innerText = segundos;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();

/* BARRA FAKE */
let progress = 0;
setInterval(() => {
  progress += 0.3;
  if (progress > 100) progress = 0;
  const fill = document.getElementById("fill");
  if (fill) fill.style.width = progress + "%";
}, 1000);
