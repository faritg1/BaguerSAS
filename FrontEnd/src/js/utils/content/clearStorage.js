import {storage} from '../auth/jwt.js';
import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';

storage.clearAll();

const verify = storage.get('token') === null ? "token no encontrado" : "Token encontrado";

console.log(verify);
console.log(endpoint.getUser);
console.log(endpoint.actualizarUser);
console.log(endpoint.eliminarUser(1));
console.log(endpoint.loginUser);

request(endpoint.getEmpleado);
request(endpoint.getUser);

