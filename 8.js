



//8. Login com "Esqueci minha senha"


let nome1 = prompt("Cadastre seu nome:");
const senha1 = "sccp";  

let nome2;
let senha2;

while (true) {
  nome2 = prompt("Digite seu nome para login:");
  senha2 = prompt("Digite sua senha para login:");

  if (nome2 === nome1 && senha2 === senha1) {
    console.log("Login realizado com sucesso!");
    break;
  } else {
    console.log("Nome ou senha incorretos.");
    let esqueceu = prompt("Esqueceu a senha? (sim/não)").toLowerCase();

    if (esqueceu === "sim") {
      console.log("Sua senha é: " + senha1);
    }
  }
}



