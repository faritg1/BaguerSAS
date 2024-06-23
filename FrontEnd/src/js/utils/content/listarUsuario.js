import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {mostrarMensaje} from './mostrarMensaje.js';
import {probando} from './nuevoUsuario.js';
import {DeleteUser} from './eliminarUsuario.js';
import {actulizarUser} from './actualizarUsuario.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#listUser').addEventListener('click', async (event) => {
        event.preventDefault();
        probando();
        try{
            const response = await request(endpoint.getUser);  
            //document.querySelector("#tableBody").innerHTML = null;
            let selectId = document.querySelector("#tableBody");
            selectId.insertAdjacentHTML("beforeend", /* html */`
            ${response.map((value)=> {
                    return(/* html */`
                    <tr>
                        <td>${value.id}</td>
                        <td>${value.username}</td>
                        <td>${value.roles[0].nombre}</td>
                        <td>
                            <button type="button" class="UpDl btn btn-success">
                                Actualizar
                            </button>
                        </td>
                        <td>
                            <button type="button" class="UpDl btn btn-danger" idUp=${value.id}>Eliminar</button>
                        </td>
                    </tr>
                `)
                }).join("")}`)

                const idUp = document.querySelectorAll(".UpDl")
                idUp.forEach(vid => {
                    vid.addEventListener("click", (event) => {
                        let id = vid.getAttribute("idUp")
                        const action = event.target.innerText.trim();
                        if (action === 'Eliminar') {
                            DeleteUser(id);
                        }else {
                            actulizarUser();
                        }
                    })
                });
                
        }catch(e){
            mostrarMensaje('warning', 'Problemas con el server');
            throw new Error(e); 
        }
    });
});