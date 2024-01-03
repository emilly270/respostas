const verificarNumero = (numero) => {
    return new Promise((resolve, reject) => {
        for(let y = 1; y <= 10; y++){
            if (numero > 5){
                return "Número alto!"
            }
            else {
                return "Número baixo!"
            }
        }
    });
}
let numero = 4;
verificarNumero().then(console.log(numero));