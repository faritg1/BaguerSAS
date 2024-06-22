import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_POST} from "../../const.js";
import {mostrarMensaje} from './mostrarMensaje.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.registro').addEventListener('submit', async (event) => {
        event.preventDefault();
        const usernameValue = document.getElementById('user').value;
        const passwordValue = document.getElementById('pass').value;
        try{
            if(!((usernameValue === "") || (passwordValue === ""))) {
                const loginUser = { username: usernameValue, password: passwordValue };
                const response = await request(endpoint.registroUser, HTTP_METHOD_POST, loginUser);    
                if(response.statusCode === 400) {
                    mostrarMensaje('warning', 'Usuario ya registrado');
                }else if(response.statusCode == 500){
                    mostrarMensaje('warning', 'Problemas con el server');
                }else{
                    mostrarMensaje("success","Registro exitoso");
                    setTimeout(() => {
                        window.location.href = "../../index.html";
                    }, 2000); 
                }
            }
        }catch(e){
            mostrarMensaje('warning', 'Problemas con el server');
            throw new Error(e); 
        }
    });
});

