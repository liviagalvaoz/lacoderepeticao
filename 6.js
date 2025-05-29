6. Login com número limitado de tentativas

let tentativas = 0;

while (tentativas < 3) {
  let usuario = prompt("Usuário:");
  let senha = prompt("Senha:");

  if (usuario === "admin" && senha === "1234") {
    console.log("Login correto!");
    break;
  } else {
    console.log("Usuário ou senha incorretos.");
    tentativas++;
  }
}

if (tentativas === 3) {
  console.log("Acesso bloqueado.");
}



