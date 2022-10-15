



let NumeroMas = 0;
let NumeroMenos = 0;
let NumeroIgual = 0;

function boton() {
    let numero = Number(document.querySelector(`.input-number`).value);
    document.querySelector('table tbody').innerHTML +=` <tr><td>${numero}</td></tr>`;
    if (0 > numero) {
        NumeroMas++
    }
    if (0 < numero) {
        NumeroMenos++
    }
    if (0 == numero) {
        NumeroIgual++
    }
    document.querySelector('.numeromenor').innerHTML = `la cantidad de numeros menores a cero son ${NumeroMenos}`;
    document.querySelector('.numeromayor').innerHTML = `la cantidad de numeros mayores a cero son ${NumeroMas}`;
    document.querySelector('.numeroigual').innerHTML = `la cantidad de numeros iguales a cero son ${NumeroIgual}`;
}