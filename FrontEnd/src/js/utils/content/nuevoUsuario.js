import {storage} from '../auth/jwt.js';
import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_POST} from "../../const.js";
import {mostrarMensaje} from './mostrarMensaje.js';

const probando = () => {
    document.querySelector('.nuevoUser').addEventListener('click', async (event) => {
        event.preventDefault();
            Swal.fire({
                title: "Agregar nuevo usuario",
                html:`<input type="text" id="user" class="swal2-input" placeholder="Username" autofocus>
                    <input type="password" id="pass" class="swal2-input" placeholder="Contraseña">`,
                focusConfirm: false,
                preConfirm: async () => {
                    const usernameValue = document.getElementById('user').value;
                    const passwordValue = document.getElementById('pass').value;
                    try {
                        if(!((usernameValue === "") || (passwordValue === ""))) {
                            const loginUser = { username: usernameValue, password: passwordValue };
                            const response = await request(endpoint.registroUser, HTTP_METHOD_POST, loginUser);    
                            if(response.statusCode === 400) {
                                Swal.showValidationMessage(`Usuario ya registrado`);
                            }else if(response.statusCode == 500){
                                Swal.showValidationMessage(`Problemas con el server`);
                            }
                            return loginUser;
                        }else{
                            Swal.showValidationMessage(`Datos vacios`);
                        }
                    } catch (error) {
                        Swal.showValidationMessage(`Problemas con el server`);
                        throw new Error(error); 
                    }
                },
                showLoaderOnConfirm: true,
                allowOutsideClick: () => !Swal.isLoading()
            }).then(async(result) =>  {
                if (result.isConfirmed) {
                    const { username } = result.value;
                    await Swal.fire({
                        title: `Usuario agregado`,
                        html: `<p>Nombre: ${username}</p>`,
                    });
                    location.reload();
                }
            });
    });
}

export {probando};


