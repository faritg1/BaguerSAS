import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';
import {HTTP_METHOD_DELETE} from "../../const.js";
import {mostrarMensaje} from './mostrarMensaje.js';

const DeleteUser = async (id) => {
        Swal.fire({
            html: `¿Está seguro de que desea eliminar el registro con ID ${id}?`,
            text: "Confirme con los botones",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
            await request(endpoint.eliminarUser(id), HTTP_METHOD_DELETE); 
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
                location.reload();
            }
        });
};

export {DeleteUser};