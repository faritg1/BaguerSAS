import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_POST} from "../../const.js";

const probando = () => {
    document.querySelector('.nuevoUser').addEventListener('click', async (event) => {
    event.preventDefault();
    Swal.fire({
        title: "Agregar nuevo usuario",
        html: 
        `<input type="text" id="user" class="swal2-input" placeholder="Username" autofocus>
        <input type="password" id="pass" class="swal2-input" placeholder="Contraseña">`,
        preConfirm: async () => {
            const usernameValue = document.getElementById('user').value;
            const passwordValue = document.getElementById('pass').value;

            const loginUser = { username: usernameValue, password: passwordValue };
            try {
                const response = await request(endpoint.registroUser, HTTP_METHOD_POST, loginUser);   
                if (response.statusCode === 400 ) {
                    Swal.showValidationMessage(`Error al registrar`);
                } else if (response.statusCode === 500) {
                    throw new Error();
                } else {
                    return loginUser;
                }
            } catch (error) {
                Swal.showValidationMessage(`Problemas con el servidor`);
            }
        },
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then(async (result) =>  {
        if (result.isConfirmed && result.value) {
            const { username } = result.value;
            await Swal.fire({
                icon: `success`,
                title: `Usuario agregado`,
                html: `<p>Nombre: ${username}</p>`,
                showConfirmButton: false,
                timer: 1500,
            });
            location.reload();
        }
    });
});
}

export {probando};


