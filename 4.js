//4. Simulação de login

let usuario = "admin" 
let senha = "1234"
usuario = prompt ("Usuário:")
senha = prompt ("Senha:")
while( usuario !== "admin" || senha !== "1234" ){
    console.log ("Login incorreto")
    usuario = prompt (" ")
    senha = prompt (" ")
    
} 
console.log ("Bem-vindo!")
