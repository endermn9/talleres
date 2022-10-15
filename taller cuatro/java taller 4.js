function numero() {
    let cantidad = document.querySelector('.numero_Fibonachi').value;
    let inicio = 1;
    let fin = 1;
    
      for (let i = 1; i < cantidad; i++) {
        let resultado = fin + inicio;
        inicio = fin
        fin = resultado 
    document.querySelector('.table').innerHTML += `${resultado} ,`
      }
}