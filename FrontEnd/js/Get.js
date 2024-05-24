const Get = async() => { 
    try {
        const url = "http://localhost:5279/User";
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const peticion = await fetch(url, options);
        const json = await peticion.json();
        console.log(json);
        let selectId = document.querySelector("#tableBody");
        selectId.insertAdjacentHTML("beforeend", /* html */`
        ${json.map((value)=> {
                return(/* html */`
                <tr>
                    <td>${value.id}</td>
                    <td>${value.username}</td>
                    <td>${value.roles[0].nombre}</td>
                    <td>
                        <button type="button" class="btn btn-success" idUp=${value.id} >
                            Actualizar
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" idUp=${value.id}>Eliminar</button>
                    </td>
                </tr>
            `)
            }).join("")}`)

            const idUp = document.querySelectorAll(".btn")
            idUp.forEach(vid => {
                vid.addEventListener("click", (event) => {
                    let id = vid.getAttribute("idUp")
                    localStorage.setItem("ID",id)
                    const action = event.target.innerText.trim();
                    if (action === 'Eliminar') {
                        Delete(id);
                    }else {
                        document.querySelector("#container").innerHTML = null;
                        Put();
                    }
                })
            })
            const Delete = async (id) => {
                const confirmDelete = confirm(`¿Está seguro de que desea eliminar el registro con ID ${id}?`);
                if (confirmDelete) {
                    try {
                        const response = await fetch(`http://localhost:5279/User/${id}`, {
                            method: 'DELETE'
                        });
                        if (response.ok) {  
                            console.log('Registro eliminado correctamente');
                        } else {
                            console.error('Error al eliminar el registro:', response.statusText);
                        }
                        window.location.href = "/Frontend/view/home.html";
                    } catch (error) {
                        console.error('Error al eliminar el registro:', error);
                    }
                } else {
                    console.log('Operación de eliminación cancelada por el usuario');
                }
            };
    } catch (error) {
        console.error('Error obteniendo información:', error);
    }
}

const Post = async() => {
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

const Put = async() => {
        let selectId = document.querySelector("#put");
        selectId.insertAdjacentHTML("beforeend", /* html */`
        <div class="row justify-content-center">
            <div class="col-md-9">
                <form  method="post">
                    <label class="form-label" for="name">Username Old</label>
                    <input class="form-control" type="text" name="userold" id="userold" required> 

                    <label class="form-label" for="name">Username New</label>
                    <input class="form-control" type="text" name="usernew" id="usernew" required> 

                    <label class="form-label" for="name">Password Old</label>
                    <input class="form-control" type="password" name="passold" id="passold" required>                    
                    <label class="form-label" for="name">Password New</label>
                    <input class="form-control" type="password" name="passnew" id="passnew" required>                    
                    <input type="hidden" name="method" value="post">
                    <p id="warning"></p>
                    <button type="button" class="btn btn-success mt-2">
                        <a href="/Frontend/view/home.html">Volver</a>
                    </button>
                    <button type="button" class="btn btn-success mt-2" onclick="updateUser()">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
        `)
}

const updateUser = async() => {
    const usern = document.getElementById('userold').value;
    const usero = document.getElementById('usernew').value;
    const passo = document.getElementById('passold').value;
    const passn = document.getElementById('passnew').value;
    const warningDiv = document.getElementById('warning');
    warningDiv.style.display = 'none'; 
    if(!((usern === "") || (usero === "") || (passo === "") || (passn === ""))){
        try {
            let newUser = {
                username: usern,
                newUsername: usero,
                oldPassword: passo,
                newPassword: passn
            };
            const url = "http://localhost:5279/User/updateUser";
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

Get();
