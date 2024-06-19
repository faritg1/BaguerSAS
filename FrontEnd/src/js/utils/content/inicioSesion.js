import {tokenJWT} from '../auth/jwt.js';
import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_POST} from "../../const.js";
import {mostrarMensaje} from './mostrarMensaje.js';

document.addEventListener('DOMContentLoaded', () => {
    const mensajeEstado = document.getElementById('mensajeEstado');
    document.querySelector('.loginFetch').addEventListener('submit', async (event) => {
        event.preventDefault();
        const usernameValue = document.getElementById('user').value;
        const passwordValue = document.getElementById('pass').value;
        try{
            if(!((usernameValue === "") || (passwordValue === ""))) {
                const loginUser = {
                    username: usernameValue,
                    password: passwordValue,
                };
                const response = await request(endpoint.loginUser, HTTP_METHOD_POST, loginUser);
    
                console.log(response);
    
                if(response.isAuthenticated === true) {
                    tokenJWT.setToken({ Key: 'token', Value: `${response.token}` });
                    mostrarMensaje('Registro exitoso', 'correcto');
                    setTimeout(() => {
                        window.location.href = "src/page/home.html";
                    }, 1000); 
                }else{
                    mostrarMensaje('Usuario o contraseña incorrecta', 'error');
                }
            }
        }catch(e){
            mostrarMensaje('Problemas con el server', 'error')
            throw new Error(e); 
        }
    });
});

