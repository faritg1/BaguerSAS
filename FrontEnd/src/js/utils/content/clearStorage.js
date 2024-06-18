import {token} from '../auth/jwt.js';
import {endpoint} from '../api/endpoints.js';

//token.removeToken();

const verify = token.getToken('token') === null ? "token no encontrado" : "Token encontrado";

console.log(verify);
console.log(endpoint.getUser);
console.log(endpoint.actualizarUser);
console.log(endpoint.eliminarUser(1));
console.log(endpoint.loginUser);

token.saludar({ nombre: 'Carlos', apellido: 'Torres' });