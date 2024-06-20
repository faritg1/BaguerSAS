import {storage} from '../auth/jwt.js';
import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_POST} from "../../const.js";
import {mostrarMensaje} from './mostrarMensaje.js';

document.addEventListener('DOMContentLoaded', () => {
    const mensajeEstado = document.getElementById('mensajeEstado');
    document.querySelector('.iniciar').addEventListener('submit', async (event) => {
        event.preventDefault();
        const usernameValue = document.getElementById('user').value;
        const passwordValue = document.getElementById('pass').value;
        try{
            if(!((usernameValue === "") || (passwordValue === ""))) {
                const loginUser = { username: usernameValue, password: passwordValue };
                const response = await request(endpoint.loginUser, HTTP_METHOD_POST, loginUser);  
                if(response.isAuthenticated === true) {
                    storage.set({ Key: 'token', Value: `${response.token}` });
                    storage.set({ Key: 'username', Value: `${response.userName}` });
                    storage.set({ Key: 'rol', Value: `${response.roles[0]}` });
                    mostrarMensaje("success","Iniciando...");
                    setTimeout(() => {
                        window.location.href = "src/page/home.html";
                    }, 2000); 
                }else if(response.statusCode == 500){
                    mostrarMensaje("warning","Problemas con el servidor...");
                }else{
                    mostrarMensaje("error","Usuario o contraseña incorrecta");
                }
            }
        }catch(e){
            mostrarMensaje("warning","Problemas con el servidor...");
            throw new Error(e); 
        }
    });
});

