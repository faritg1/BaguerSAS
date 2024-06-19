import {tokenJWT} from '../auth/jwt.js';
import {endpoint} from '../api/endpoints.js';
import {request} from '../api/request.js';

tokenJWT.removeToken();

const verify = tokenJWT.getToken('token') === null ? "token no encontrado" : "Token encontrado";

console.log(verify);
console.log(endpoint.getUser);
console.log(endpoint.actualizarUser);
console.log(endpoint.eliminarUser(1));
console.log(endpoint.loginUser);

tokenJWT.saludar({ nombre: 'Carlos', apellido: 'Torres' });

request(endpoint.getEmpleado);
request(endpoint.getUser);