













//9. Sistema com login e logout
// cadastro
let nome = prompt("cadastre seu nome:");
let senha = prompt("cadastre sua senha:");

// login
let nomedigitado;
let senhadigitada;

while (true) {
  nomedigitado = prompt("digite seu nome para login:");
  senhadigitada = prompt("digite sua senha para login:");

  if (nomedigitado === nome && senhadigitada === senha) {
    console.log("login realizado com sucesso!");
    break;
  } else {
    console.log("nome ou senha incorretos.");
    let esqueceu = prompt("esqueceu a senha? (sim/não)").toLowerCase();

    if (esqueceu === "sim") {
      console.log("sua senha é: " + senha);
    }
  }
}




