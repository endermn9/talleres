
let nombre = "";
let documentoo = "";
let cavinaa = "";
let cont = 0;


function cantidad_vagones() {
    let cantidad_de_vagones = prompt("elija la cantiadad de bagones")
    for (let i = 0; i < cantidad_de_vagones; i++) {
        document.querySelector('.bucles').innerHTML += `
        <table class="table">
            <thead>
                <th scope="col">vagon ${i}</th>
                <th scope="col">Nombre </th>
                <th scope="col">Documento </th>
            </thead>
            <tbody class="id${i}">

            </tbody>
  
     <tr>
     <th scope="col"> </th>

     <th scope="col"><button type="button" class="btn btn-warning" onclick="botonN(${i})">Nombre</button></th>
     
     <th scope="col"> </th></tr></tbody>
     </table> -->`
    }
}

// <tr>
// <th scope="col" class="cavi"></th>
// <th scope="col" class="nombre">${nombre}</th>
// <th scope="col" class="documentor">${documentoo}</th>
// </tr> 


function botonN(idVagon) {
    let nombree = prompt('agrege el nombre del pasajero')
    nombre = nombree;
    documentoo = prompt('agrege el documento del pasajero')
    document.querySelector(`.id${idVagon}`).innerHTML += `<tr class="vagonn${idVagon}-${documentoo}"><th></th><th scope="col" class="nombre">${nombre}</th><th>${documentoo}</th><th scope="col"><button type="button"class="btn btn-warning" onclick="eliminar(${idVagon},${documentoo})" >Delet</button></th></tr>`
}

function eliminar(idVagon,documentoo) {
    document.querySelector(`.vagonn${idVagon}-${documentoo}`).innerHTML = ""
    
}

// function botonC() {
//     cavinaa = prompt('elige el vagon del pasajero')
// }

