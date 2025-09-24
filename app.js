// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
  let campoDigiteNome = document.querySelector("input").value;

  if (campoDigiteNome.length != 0) {
    listaAmigos.push(campoDigiteNome);
    document.querySelector("input").value = "";
    document.querySelector("input").focus();
  } else {
    alert("Você precisa digitar um nome!");
    document.querySelector("input").focus();
  }
}

function sortearAmigo() {}
