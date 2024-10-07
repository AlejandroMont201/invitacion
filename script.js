document.getElementById('abrir-btn').addEventListener('click', function() {
    const cartaCerrada = document.getElementById('carta-cerrada');
    const cartaAbierta = document.getElementById('carta-abierta');

    // Ocultamos la carta cerrada y mostramos la carta abierta con animación
    cartaCerrada.style.display = 'none';
    cartaAbierta.classList.remove('cerrada');
    cartaAbierta.classList.add('abierta');
    cartaAbierta.style.display = 'flex';
});

document.getElementById('cerrar-btn').addEventListener('click', function() {
    const cartaCerrada = document.getElementById('carta-cerrada');
    const cartaAbierta = document.getElementById('carta-abierta');

    // Ocultamos la carta abierta y mostramos la carta cerrada con animación
    cartaAbierta.classList.remove('abierta');
    cartaAbierta.classList.add('cerrada');

    setTimeout(() => {
        cartaAbierta.style.display = 'none';
        cartaCerrada.style.display = 'flex';
    }, 1000);  // Esperamos a que termine la animación de cerrar
});
