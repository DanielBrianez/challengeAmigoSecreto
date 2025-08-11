//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function verificarAmigos(){
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome == ''){
        alert('Insira um nome válido!');
        return;
    }

    amigos.push(nome)
    input.value = '';
    }