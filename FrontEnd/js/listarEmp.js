let tokeAuth = localStorage.getItem('token');
const lisEmp = async() => {
    document.querySelector("#container").innerHTML = null;
    document.querySelector("#emp").innerHTML = null;
    document.querySelector("#listImg").innerHTML = null;
    document.querySelector("#listEmp").innerHTML = null;
    let emp = document.querySelector("#listEmp");
        emp.insertAdjacentHTML("beforeend", /* html */`
        <div class="row justify-content-center">
        <div class="col-md-9"> 
            <table id="tableEmple" class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">     </th>
                    </tr>
                </thead>
                <tbody id="tableBodyEmp">
                        
                </tbody>
            </table>
            <table id="tableDetalle" class="table table-dark">
            
            </table>
            <button type="button" class="btn btn-success mt-2">
                        <a href="/Frontend/view/home.html" class="text-white">Mirar Rol</a>
            </button>
        </div>
        
        `)
        document.querySelector("#tableDetalle").innerHTML = null;
    GetListEmp();
}


const GetListEmp = async() => { 
    try {
        const url = "http://localhost:5279/Empleado";
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokeAuth}` 
            }
        };
        const peticion = await fetch(url, options);
        const json = await peticion.json();
        console.log(json);
        let listEmp = document.querySelector("#tableBodyEmp");
        listEmp.insertAdjacentHTML("afterend", /* html */`
        ${json.map((value)=> {
                return(/* html */`
                <tr>
                    <td>${value.id}</td>
                    <td>${value.nombre}</td>
                    <td>${value.apellido}</td>
                    <td>
                        <button type="button" class="btn btn-success" idEmp=${value.id} >
                            Detalle
                        </button>
                    </td>
                </tr>
                
            `)
            }).join("")}`)

            const idEmp = document.querySelectorAll(".btn") 
            idEmp.forEach(vid => {
                vid.addEventListener("click", () => {
                    let id = vid.getAttribute("idEmp")
                    localStorage.setItem("IdEmp",id)
                    document.querySelector("#tableEmple").innerHTML = null;
                    detalleEmp(id);
                })
            })
    } catch (error) {
        console.error('Error obteniendo información:', error);
    }
}

const detalleEmp = async(id) => {
    document.querySelector("#tableEmple").innerHTML = null;
    let emp = document.querySelector("#tableDetalle");
        emp.insertAdjacentHTML("beforeend", /* html */` 
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Ciudad</th>
                </tr>
            </thead>
            <tbody id="tableListBodyEmp">
                    
            </tbody>
        `)
    DetallLisEmp(id)
}

const DetallLisEmp = async(id) => { 
    document.querySelector("#tableEmple").innerHTML = null;
    try {
        const url = `http://localhost:5279/Empleado/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokeAuth}` 
            }
        };
        const peticion = await fetch(url, options);
        const json = await peticion.json();
        const data = [];
        data.push(json);
        console.log(data);
        let listEmp = document.querySelector("#tableListBodyEmp");
        listEmp.insertAdjacentHTML("afterend", /* html */`
        ${data.map((value)=> {
                return(/* html */`
                <tr>
                    <td>${value.id}</td>
                    <td>${value.nombre}</td>
                    <td>${value.apellido}</td>
                    <td>${value.email}</td>
                    <td>${value.telefono}</td>
                    <td>${value.direccion}</td>
                    <td>${value.pais}</td>
                    <td>${value.ciudad}</td>
                </tr>
            `)
            }).join("")}`)
    } catch (error) {
        console.error('Error obteniendo información:', error);
    }
}
