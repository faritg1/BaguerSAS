const empPost = async() => {
    document.querySelector("#container").innerHTML = null;
    document.querySelector("#listEmp").innerHTML = null;
    document.querySelector("#emp").innerHTML = null;
    let emp = document.querySelector("#emp");
        emp.insertAdjacentHTML("beforeend", /* html */`
        <div class="row justify-content-center">
            <div class="col-md-9">
                <form  method="post">
                    <label class="form-label" for="name">nombre</label>
                    <input class="form-control" type="text" name="nomEmp" id="nomEmp" required> 

                    <label class="form-label" for="name">apellido</label>
                    <input class="form-control" type="text" name="apeEmp" id="apeEmp" required> 

                    <label class="form-label" for="name">email</label>
                    <input class="form-control" type="email" name="EmaEmp" id="EmaEmp" required>  
                    
                    <label class="form-label" for="name">telefono</label>
                    <input class="form-control" type="number" name="telEmp" id="telEmp" required>  
                    
                    <label class="form-label" for="name">direccion</label>
                    <input class="form-control" type="text" name="dirEmp" id="dirEmp" required>
                    
                    <label class="form-label" for="name">pais</label>
                    <input class="form-control" type="text" name="paiEmp" id="paiEmp" required> 

                    <label class="form-label" for="name">ciudad</label>
                    <input class="form-control" type="text" name="ciuEmp" id="ciuEmp" required> 
                    
                    <input type="hidden" name="method" value="post">
                    <p id="warning"></p>
                    <button type="button" class="btn btn-success mt-2">
                        <a href="/Frontend/view/home.html" class="text-white">Mirar Rol</a>
                    </button>
                    <button type="button" class="btn btn-success mt-2" onclick="empData()">
                        Enviar data emp
                    </button>
                </form>
            </div>
        </div>
        `)
}

const empData = async() => {
    const nomEmp = document.getElementById('nomEmp').value;
    const apeEmp = document.getElementById('apeEmp').value;
    const EmaEmp = document.getElementById('EmaEmp').value;
    const telEmp = document.getElementById('telEmp').value;
    const dirEmp = document.getElementById('dirEmp').value;
    const paiEmp = document.getElementById('paiEmp').value;
    const ciuEmp = document.getElementById('ciuEmp').value;
    const warningDiv = document.getElementById('warning');
    warningDiv.style.display = 'none'; 
    if(!((nomEmp === "") || (apeEmp === "") || (EmaEmp === "") || (telEmp === "") || (dirEmp === "") || (paiEmp === "") || (ciuEmp === ""))){
        try {
            let newUser = {
                nombre: nomEmp,
                apellido: apeEmp,
                email: EmaEmp,
                telefono: telEmp,
                direccion: dirEmp,
                pais: paiEmp,
                ciudad: ciuEmp,
                userId: 1
            };
            const url = "http://localhost:5279/Empleado";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            };
            console.log(options);
            const response = await fetch(url, options);
            const result = await response.json();
            localStorage.setItem("IdImgEmp",result.id)
            if(!response.ok){
                warningDiv.textContent = 'Hay un error con los datos';
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
