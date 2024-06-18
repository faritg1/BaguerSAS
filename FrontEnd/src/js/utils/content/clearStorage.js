import {token} from '../auth/jwt.js';

token.removeToken();

const verify = token.getToken(token) === null ? "token no encontrado" : "Token encontrado";

console.log(verify);

token.saludar({ nombre: 'Carlos', apellido: 'Torres' });