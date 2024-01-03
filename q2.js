const captalizarTitulos = (titulos) => {
    return titulos.map(titulos => titulos.toUpperCase());
}
console.log(captalizarTitulos(["o pequeno principe", "dom casmurro"]));