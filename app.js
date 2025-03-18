let amigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombre = amigoInput.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        console.log(`Amigo/a agregado: ${nombre}`);
        actualizarLista();
        amigoInput.value = ''; 
    } else {
        alert('Por favor, ingrese un nombre válido y único.');
    }
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agrega algunos nombres primero.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    const li = document.createElement('li');
    li.textContent = `Tu amigo/a secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}