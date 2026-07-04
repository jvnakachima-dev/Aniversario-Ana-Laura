if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const dataFesta = new Date("2026-08-08T21:00:00").getTime();

const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;

    if (diferenca <= 0) {
        diasElemento.textContent = "00";
        horasElemento.textContent = "00";
        minutosElemento.textContent = "00";
        segundosElemento.textContent = "00";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    diasElemento.textContent = dias;
    horasElemento.textContent = horas.toString().padStart(2, "0");
    minutosElemento.textContent = minutos.toString().padStart(2, "0");
    segundosElemento.textContent = segundos.toString().padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);

const abertura = document.getElementById("abertura");
const abrirConvite = document.getElementById("abrirConvite");

abrirConvite.addEventListener("click", () => {
    window.scrollTo(0, 0);

    abertura.classList.add("aberto");

    setTimeout(() => {
        abertura.classList.add("escondida");
    }, 900);

    setTimeout(() => {
        abertura.classList.add("removida");
    }, 1600);
});

const musicaConvite = document.getElementById("musicaConvite");

musicaConvite.volume = 0.18;

abrirConvite.addEventListener("click", () => {
    window.scrollTo(0, 0);

    musicaConvite.play().catch(() => {
        console.log("O navegador bloqueou a reprodução automática da música.");
    });

    abertura.classList.add("aberto");

    setTimeout(() => {
        abertura.classList.add("escondida");
    }, 900);

    setTimeout(() => {
        abertura.classList.add("removida");
    }, 1600);
});