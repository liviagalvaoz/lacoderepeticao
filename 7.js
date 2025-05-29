//7.Cadastro e login

let nome = prompt("Cadastre seu nome:");
let senha = prompt("Cadastre sua senha:");


while (true) {
  let nome1 = prompt("Digite seu nome para login:");
  let senha1 = prompt("Digite sua senha para login:");

  if (nome1 === nome && senha1 === senha) {
    console.log("Login realizado com sucesso!");
    break;
  } else {
    console.log("Nome ou senha incorretos. Tente novamente.");
  }
}





