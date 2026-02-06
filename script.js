function entrar() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("spotify").classList.remove("hidden");
}

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

  document.getElementById("anos").innerText = anos;
  document.getElementById("meses").innerText = meses;
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
