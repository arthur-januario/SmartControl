let usuario = prompt ("Digite seu nome e sobrenome:")
const agora = new Date();
const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]
let ano = agora.getFullYear();
let mes = String(agora.getMonth()+1).padStart(2,"0");
let diaSemana = dias[agora.getDay()];
let dia = String(agora.getDate()).padStart(2,"0");
let hora = String(agora.getHours()).padStart(2,"0");
let minuto = String(agora.getMinutes()).padStart(2,"0");
let dataAtual = `${diaSemana}, ${dia}/${mes}/${ano} = ${hora}:${minuto}`;
const mensagem = document.querySelector("#Mensagem-boas-vindas");
if (mensagem) {
     mensagem.textContent = `Seja bem vindo ${usuario}! Hoje é ${dataAtual}`;
}
console.log(usuario);
console.log(dataAtual);

const campoBusca = document.getElementById("campoBusca");
const tabela = document.getElementById("tabelaAcessos");
campoBusca.addEventListener("input", function () {
const busca = campoBusca.value.toLowerCase();
const linhas = tabela.querySelectorAll("tbody tr");
linhas.forEach(function (linha) {
const texto = linha.textContent.toLowerCase();
if (texto.includes(busca)) {
linha.classList.remove("oculto");
} else {
linha.classList.add("oculto");
}
});
});

const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", function () {
document.body.classList.toggle("dark-theme");
});

const btnMenu = document.getElementById("btnMenu");
const menuLateral = document.getElementById("menuLateral");
btnMenu.addEventListener("click", function () {
menuLateral.classList.toggle("menu-aberto");
});