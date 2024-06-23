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
