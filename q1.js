const formatarContato = (contato) => {
    let {nome, email, telefone} = contato;
    return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`;
}
console.log(formatarContato({nome : "Alguém", email: "alguem@gmail.com", telefone: "0000000000"}));