
let cantidad_de_usuarios = prompt("ingrese la cantidad de usuarios");
let mayor_de_edad = 0;
let menor_de_edad = 200;
let nombre_del_mayor = "";
let nombre_del_menor = "";

for (let contador = 1; contador <= cantidad_de_usuarios; contador++) {
    document.querySelector('.contenedor_java').innerHTML += ` <form class="my-5">
    <h1>Persona ${contador}</h1>
    <div class="mb-3">
    <label for="nombre${contador}" class="form-label">nombre ${contador}</label>
    <input type="text" class="form-control nombre${contador}" id="nombre${contador}">
</div>
    <div class="mb-3">
        <label for="edad${contador}" class="form-label">edad ${contador}</label>
        <input type="number" class="form-control edad${contador}" id="alturaTR${contador}">
    </div>
</form>`;
}

function calculate(e) {
    let nombre, edad;

    for (let contador = 1; contador <= cantidad_de_usuarios; contador++) {
        nombre = document.querySelector(`.nombre${contador}`).value;
        edad = Number(document.querySelector(`.edad${contador}`).value);
        // nombredelmayor = document.querySelector(`.edad${contador}`).value;
        // edaddelmayor = document.querySelector(`.edad${contador}`).value;

        if (edad < menor_de_edad) {
            menor_de_edad = edad;
            nombre_del_menor = nombre;
            console.log("condition minor ", nombre_del_menor)
        } 
        
        if (edad > mayor_de_edad) {
            mayor_de_edad = edad;
            nombre_del_mayor = nombre;
            console.log("condition major ", nombre_del_mayor)
        }
    }


    document.querySelector('.fin').innerHTML = alert(`la persona menor tiene ${menor_de_edad} años y se llama ${nombre_del_menor} y la persona mas grande tiene ${mayor_de_edad} años y se llama ${nombre_del_mayor} `)


    // else {
    //     const nada = ''
    //     alert("porfavor ingrese los datos que requirio")
    // }
    // function alerta_final() {
    //     alert(`la persona menor tiene ${ menor_de_edad } años y se llama ${ nombre_del_menor } y la persona mas grande tiene ${ mayor_de_edad } años y se llama ${ nombre_del_mayor } `)
    // } 
}
// function final(e) {
//     document.querySelector('.fin').innerHTML = `la persona menor tiene ${menor_de_edad} años y se llama ${nombre_del_menor} y la persona mas grande tiene ${mayor_de_edad} años y se llama ${nombre_del_mayor} `
// }


