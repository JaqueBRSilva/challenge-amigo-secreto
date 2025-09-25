// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigosAdd = [];
let listaAmigos = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#resultado");

function adicionarAmigo() {
  let campoDigiteNome = document.querySelector("input").value;

  if (campoDigiteNome.length != 0 && !listaAmigosAdd.includes(campoDigiteNome.toUpperCase())) {
    listaAmigosAdd.push(campoDigiteNome.toUpperCase());
    listaAmigos.innerHTML += `<li>${campoDigiteNome.toUpperCase()}</li>`;
    document.querySelector("input").value = "";

  } else {
    if (campoDigiteNome.length == 0) {
      alert("Por favor, insira um nome");
    } else if (listaAmigosAdd.includes(campoDigiteNome.toUpperCase())) {
      alert("Este nome já foi adicionado anteriormente");
    }
  }

  document.querySelector("input").focus();
}

function sortearAmigo() {
  if (listaAmigosAdd.length < 2) {
    alert("Há menos de 2 amigos na lista. Adicione mais pessoas para sortear.");
  }

  let indexSorteado = Math.floor(Math.random() * listaAmigosAdd.length);

  let amigoSorteado = listaAmigosAdd[indexSorteado];

  resultado.innerHTML += `<li>${amigoSorteado.toUpperCase()}</li>`;
}
