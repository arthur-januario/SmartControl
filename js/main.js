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