const mostrarMensaje = (icon,texto) => {
    Swal.fire({
        icon: `${icon}`,
        title: `${texto}`,
        showConfirmButton: false,
        timer: 1500
    });
}

export {mostrarMensaje}