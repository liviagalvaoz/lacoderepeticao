
//3. Confirmação de senha

let senha = "sccp"
senha = prompt ("Senha:")
confirmacaosenha = prompt ("Confirme a senha:")
while( senha !== "sccp" || confirmacaosenha !== "sccp" ){
    console.log ("Senha incorreta")
    senha = prompt ("")
    confirmacaosenha = prompt ("")
    
} 
console.log ("Bem-vindo!")

