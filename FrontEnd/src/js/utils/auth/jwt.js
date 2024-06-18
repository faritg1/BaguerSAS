const tokenJWT = {
    getToken : (res) => {
        return localStorage.getItem(`${res}`);
    },
    removeToken : () => {
        return localStorage.clear();
    },
    setToken : (res = {}) => {
        return localStorage.setItem(`${res.Key}`,res.Value);
    },
    saludar : (res = {}) => {
        return console.log(`Hola '${res.nombre}', ${res.apellido}`);
    }
}

export { tokenJWT };