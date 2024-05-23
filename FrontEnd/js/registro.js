const Register = async() => {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    console.log(user);
    console.log(pass);
    const warningDiv = document.getElementById('warning');
    warningDiv.style.display = 'none'; 
    if(!((user === "") || (pass === ""))){
        try {
            let newUser = {
                username: user,
                password: pass,
            };
            const url = "http://localhost:5279/User/registro";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            };
            console.log(options);
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(response);
            if(!response.ok){
                warningDiv.textContent = 'Usuario ya registrado';
                warningDiv.style.display = 'block';
                return;
            }
            return window.location.href = "/Frontend/view/home.html";
        } catch (error) {
            return "Hay un error" + error;
        }
    }else{
        warningDiv.textContent = 'Datos vacios';
        warningDiv.style.display = 'block';
        return;
    }
} 