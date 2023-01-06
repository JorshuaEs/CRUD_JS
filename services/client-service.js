const crearNuevaLinea = (nombre,email) => {
    const linea = document.createElement("tr")
   const contenido = `
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>
        ${email}
    </td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector("[data-table]");  



//parametros 
//Abrir http (método,url);

//CRUD   - Métodos HTTP
//Create - post
//Read   - Get
//Update - Put/Patch
//Delete - Delete


//Fetch API
const listaClientes = () => {
    return fetch('http://localhost:3000/perfil').then( respuesta => {
        return respuesta.json();
    })
};

listaClientes()
    .then((data) => {
        data.forEach( perfil => {
            const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
            table.appendChild(nuevaLinea);
        });
    }).catch((error) => alert("ocurrió un error"));



//promise ejecuta funciones de una manera asincrona, no se debe de esperar el resultado para seguir ejecutando el programa