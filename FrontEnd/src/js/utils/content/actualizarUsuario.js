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
            const usernameOld = document.getElementById('user').value;
            const passwordOld = document.getElementById('pass').value;
            const usernameNew = document.getElementById('newUser').value;
            const passwordNew = document.getElementById('newPass').value;

            const updateUser = { username: usernameOld, newUsername: usernameNew, oldPassword: passwordOld, newPassword: passwordNew}
            try {
                const response = await request(endpoint.actualizarUser, HTTP_METHOD_POST, updateUser);   
                if (response.statusCode === 400 ) {
                    Swal.showValidationMessage(`Error al actualizar`);
                } else if (response.statusCode === 500) {
                    throw new Error();
                } else {
                    return updateUser;
                }
            } catch (error) {
                Swal.showValidationMessage(`Problemas con el servidor`);
            }
        },
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then(async (result) =>  {
        if (result.isConfirmed && result.value) {
            const { newUsername } = result.value;
            await Swal.fire({
                icon: `success`,
                title: `Actualizado`,
                html: `<p>Usuario: ${newUsername}</p>`,
                showConfirmButton: false,
                timer: 1500,
            });
            location.reload();
        }
    });
};


export {actulizarUser};


