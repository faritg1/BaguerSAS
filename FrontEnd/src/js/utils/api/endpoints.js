//JavaScript
import { getAPI_URL } from "./config.js";

const API_URL = getAPI_URL();

const endpoint = {
    // Endpoints User
    getUser : `${API_URL}user`,
    registroUser : `${API_URL}User/registro`,
    loginUser : `${API_URL}User/login`,
    actualizarUser : `${API_URL}User/updateUser`,
    eliminarUser : (id) => {
        return `${API_URL}User/${id}`
    },
    // Endpoints Empleado
    getEmpleado : `${API_URL}Empleado`,
    postEmpleado : `${API_URL}Empleado`,
    getIdEmpleado : (id) => {
        return `${API_URL}Empleado/${id}`
    }
};

export { endpoint };
