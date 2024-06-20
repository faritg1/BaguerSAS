const storage = {
    get : (res) => {
        return localStorage.getItem(`${res}`);
    },
    clearAll : () => {
        return localStorage.clear();
    },
    set : (res = {}) => {
        return localStorage.setItem(`${res.Key}`,res.Value);
    }
}

export { storage };