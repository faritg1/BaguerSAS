import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_POST} from "../../const.js";
import {mostrarMensaje} from './mostrarMensaje.js';

document.addEventListener('DOMContentLoaded', () => {
    const mensajeEstado = document.getElementById('mensajeEstado');
    document.querySelector('.registro').addEventListener('submit', async (event) => {
        event.preventDefault();
        const usernameValue = document.getElementById('user').value;
        const passwordValue = document.getElementById('pass').value;
        try{
            if(!((usernameValue === "") || (passwordValue === ""))) {
                const loginUser = { username: usernameValue, password: passwordValue };
                const response = await request(endpoint.registroUser, HTTP_METHOD_POST, loginUser);    
                console.log(response);
                if(response.statusCode === 400) {
                    mostrarMensaje('Usuario ya registrado', 'error');
                }else if(response.statusCode == 500){
                    mostrarMensaje('Problemas con el server', 'error');
                }else{
                    mostrarMensaje('Registro exitoso', 'correcto');
                    setTimeout(() => {
                        window.location.href = "../../index.html";
                    }, 1000); 
                }
            }
        }catch(e){
            mostrarMensaje('Problemas con el server', 'error')
            throw new Error(e); 
        }
    });
});

