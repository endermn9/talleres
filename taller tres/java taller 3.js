
function fin() {
    const producto = document.querySelector('.producto').value;
    const datos = document.querySelector('.valor').value;
    const porcentaje = datos * 7 / 100 ;
    const total = datos - porcentaje 
    document.querySelector(`table tbody`).innerHTML += `<tr> <td> ${producto} vale ${datos} con un descuento de ${porcentaje} en total serian ${total}</td> </tr>`
}
