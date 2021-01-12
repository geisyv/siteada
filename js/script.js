document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&document.getElementById("E-mail").value != "" && document.getElementById("telefone").value != ""){
alert("Prontinho, você receberá as mensagens por e-mail.")
  }else{
    alert("peça a usuária que preencha os campos nome e e-mail")
}
}
