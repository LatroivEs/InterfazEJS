const validarCorreo = (email) =>{
    const regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

    return regex.test(email);
}


const crudCliente = async()=>{
    const nombre = document.querySelector("#crudNombre").value;
    const apellidos = document.querySelector("#CrudApellido").value;
    const edad = document.querySelector("#CrudEdad").value;
    const email = document.querySelector("#CrudEmail").value;

    if(nombre.trim()===''|| apellidos.trim()===''|| edad.trim()===''|| email.trim()==='' ){
        alert("Necesita rellenar todos los campos para continuar");
        return;
    }

    if(!validarCorreo(email)){
        alert("El correo introducido no es valido. Introduzca un correo valido");
        return;
    }

    if(edad < 1 || edad >140){
        alert("La edad no es valida.Introduzca una edad valida");
        return;
    }

    const datos = new FormData();
    datos.append("nombre",nombre)
    datos.append("apellidos",apellidos);
    datos.append("edad",edad);
    datos.append("email",email);

    let respuesta = await fetch("/api/agregarCliente",
    {method:"POST", body:datos});

    //let resultado = await respuesta.json();

   


    if (true){
        document.querySelector("#crudNombre").value='';
        document.querySelector("#CrudApellido").value='';
        document.querySelector("#CrudEdad").value='';
        document.querySelector("#CrudEmail").value='';

        document.querySelector("#closeCRUDClient").click();
    }else{
        alert("Fallo en el envio de datos");
    }
}

const editcrudCliente = (row,nombre,apellidos,edad,email) =>{
    
    document.querySelector("#editcrudNombre").value=nombre;
    document.querySelector("#editCrudApellido").value=apellidos;
    document.querySelector("#editCrudEdad").value=edad;
    document.querySelector("#editCrudEmail").value=email;
    
    document.querySelector("#openeditclientCRUDModal").click();
}

const editarCliente = async (row,nombre,apellidos,edad,email) =>{
    console.log("Editar registro "+row);
    editcrudCliente(row,nombre,apellidos,edad,email);
    //TO-DO
}

const eliminarCliente = async (row) =>{
    console.log("Eliminar registro "+row)
    //TO-DO
}

const cargarClientes = async () =>{
    //datos mockeados
    let respuesta =  {data:[["1","Antonio","Moreno","41","correofalso@fakemail.com"],["2","Fernando","Hergueta","12","ilovefrancia@fakemail.com"],["3","Maria","Mosca","22","inotlovefrancia@fakemail.com"],["4","Maria","Mosca","22","inotlovefrancia@fakemail.com"]]};
    //let resultado = await respuesta.json();
    let registroHTML = ``;

    respuesta.data.forEach( row =>{
        registroHTML +=
        `<tr>
            <td>${row[0]}</td>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td>
            <td><button class="btn primary-color-background" onclick="editarCliente(${row[0]},'${row[1]}','${row[2]}','${row[3]}','${row[4]}')"><i class="bi bi-pencil-square pr-1"></i>Editar</button></td>
             <td><button class="btn btn-danger" onclick="eliminarCliente(${row[0]})"><i class="bi bi-trash3 pr-1"></i>Eliminar</button></td>
        </tr>`});
                  
    document.querySelector("#registrosCliente").innerHTML=registroHTML;
}