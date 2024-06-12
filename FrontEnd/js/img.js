const imagen = async() =>{
    document.querySelector("#container").innerHTML = null;
    document.querySelector("#listEmp").innerHTML = null;
    document.querySelector("#emp").innerHTML = null;
    document.querySelector("#listImg").innerHTML = null;

    let emp = document.querySelector("#emp");
    emp.insertAdjacentHTML("beforeend", /* html */`
    <div class="row justify-content-center">
        <div class="col-md-9">
        <form  method="post" enctype="multipart/form-data">
                    <h5>Antes de subir una foto tiene que existir un registro de un empleado</h5>
                    <label class="form-label" for="name">Archivo</label>
                    <input class="form-control" type="file" name="file" id="file" required> 

                    <input type="hidden" name="method" value="post">
                    <p id="warning"></p>
                    <button type="button" class="btn btn-success mt-2">
                        <a href="/Frontend/view/home.html" class="text-white">Mirar Rol</a>
                    </button>
                    <button type="button" class="btn btn-success mt-2" onclick="empImg()">
                        Enviar IMG
                    </button>
                </form>
        </div>
    </div>
    `)
}

const empImg = async() => {
    const file = document.getElementById('file').value;
    const warningDiv = document.getElementById('warning');
    const id = localStorage.getItem('IdImgEmp');
    warningDiv.style.display = 'none'; 
    if(!((file === ""))){
        try {
            let newUser = {
                img: file,
                empleadoId: id
            };
            const url = `http://localhost:5279/Img?empId=${id}`;
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
            console.log(result);
            console.log(response);
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