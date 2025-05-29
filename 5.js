
//5. Login com mensagem de erro

let usuario = "admin" 
let senha = "1234"
usuario = prompt ("Usuário:")
senha = prompt ("Senha:")
while( usuario !== "admin" || senha !== "1234" ){
    console.log ("Usuário ou senha incorretos.")
    usuario = prompt (" ")
    senha = prompt (" ")
    
} 
console.log ("Bem-vindo!")



