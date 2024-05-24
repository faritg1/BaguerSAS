const listImg = async () => {
    document.querySelector("#container").innerHTML = null;
    document.querySelector("#emp").innerHTML = null;
    let emp = document.querySelector("#listImg");
        emp.insertAdjacentHTML("beforeend", /* html */`
        <div class="row justify-content-center">
        <div class="col-md-9"> 
            <table id="tableEmple" class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Img</th>
                        <th scope="col">Id Empleado</th>
                    </tr>
                </thead>
                <tbody id="tableListImg">
                        
                </tbody>
            </table>
            <button type="button" class="btn btn-success mt-2">
                        <a href="/Frontend/view/home.html" class="text-white">Mirar Rol</a>
            </button>
        </div>
        `)
    listImgEmp();
}

const listImgEmp = async() => { 
    try {
        const url = "http://localhost:5279/Img";
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const peticion = await fetch(url, options);
        const json = await peticion.json();
        console.log(json);
        let listEmp = document.querySelector("#tableListImg");
        listEmp.innerHTML = json.map((value) => {
            return /* html */`
                <tr>
                    <td>${value.id}</td>
                    <td><img src='data:${value.tipo};base64,${value.img}' alt="Image" style="max-width: 100px; height: auto;"></td>
                    <td>${value.empleadoId}</td>
                </tr>`;
        }).join("");
    } catch (error) {
        console.error('Error obteniendo información:', error);
    }
}