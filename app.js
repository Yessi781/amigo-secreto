let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let validarEntrada = inputAmigo.value.trim();

    if (!validarEntrada) {
        alert("Por favor, inserte un nombre.");
    }

    amigos.push(validarEntrada);
    console.log(validarEntrada);

    limpiarCampoDeEntrada();
    actualizarListaAmigos();
}

function limpiarCampoDeEntrada() {
    document.getElementById("amigo").value = "";
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
        console.log("Lista a" + listaAmigos);
    }
}

function sortearAmigo() {
    if (!amigos.length) {
        alert("No hay amigos agregados, agrega amigos para sortear");
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const obtenerNombreSorteado = amigos[indiceAleatorio];

    let mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerHTML = `El amigo sorteado es: ${obtenerNombreSorteado}`;
}


