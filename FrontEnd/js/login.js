document.addEventListener('DOMContentLoaded', () => {
    const mensajeEstado = document.getElementById('mensajeEstado');
    document.querySelector('.loginFetch').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('user').value;
        const password = document.getElementById('pass').value;
        if(username === "" || password === "") {
        mostrarMensaje('Por favor, complete todos los campos', 'error');
        } else {
        verifLogin(username, password);
        }
    });

    const login = async (usernameText, passwordText) => {
        const url = "http://localhost:5279/User/login";
        let data = {
            username: usernameText,
            password: passwordText,
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                mostrarMensaje('Error en la solicitud', 'error')
                throw new Error(`Error en la solicitud de inicio de sesión: ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        } catch (error) {
            mostrarMensaje('Error durante el inicio de sesión:', 'error',error);
            throw new Error(error); 
        }
    }

    const verifLogin = async (usernameText, passwordText) => {
        try {
        const result = await login(usernameText, passwordText);
        
        if (!result || !result.token) {
            mostrarMensaje('Inicio de sesión fallido o token no recibido', 'error') ;
        }
        
        const token = result.token;
        localStorage.setItem('token', token);

        const arrayT = token.split('.');
        if (arrayT.length !== 3) {
            mostrarMensaje ('Token JWT inválido', 'error');
        }

        const tokenPay = JSON.parse(atob(arrayT[1]));
        
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const isTokenExpired = currentTimestamp >= tokenPay.exp;
        
        if (!isTokenExpired) {
            mostrarMensaje('Resgistro exitoso', 'correcto');
            setTimeout(() => {
                window.location.href = "./view/home.html";
            }, 1000); 
        } else {
            mostrarMensaje ('El token ha expirado', 'error') ;
        }
        } catch (error) {
            mostrarMensaje (error, 'error');
        }
    }

    const mostrarMensaje = (texto, tipo) => {
        mensajeEstado.textContent = texto;
        mensajeEstado.classList.add(tipo);
        mensajeEstado.style.display = 'block';

        setTimeout(() => {
            mensajeEstado.style.display = 'none';
            mensajeEstado.classList.remove(tipo);
        }, 1000); 
    }
});