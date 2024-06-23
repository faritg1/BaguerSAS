import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_POST} from "../../const.js";

const actulizarUser = () => {
    Swal.fire({
        title: "Actualizar Usuario",
        html: 
        `<input type="text" id="user" class="swal2-input" placeholder="Username">
        <input type="text" id="newUser" class="swal2-input" placeholder="New Username">
        <input type="password" id="pass" class="swal2-input" placeholder="Contraseña">
        <input type="password" id="newPass" class="swal2-input" placeholder="New Contraseña">
        `,
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
                title: `Actualizado`,
                html: `<p>Nombre: ${username}</p>`,
                showConfirmButton: false,
                timer: 1500,
            });
            location.reload();
        }
    });
};


export {actulizarUser};


