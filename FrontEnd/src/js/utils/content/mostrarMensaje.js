const mostrarMensaje = (texto, tipo) => {
    mensajeEstado.textContent = texto;
    mensajeEstado.classList.add(tipo);
    mensajeEstado.style.display = 'block';

    setTimeout(() => {
        mensajeEstado.style.display = 'none';
        mensajeEstado.classList.remove(tipo);
    }, 1000); 
}

export {mostrarMensaje}