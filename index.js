let i = 0;
var soma = 0


do {
  var numero = prompt("valor real:")
  var numero = parseInt(numero);
  var soma = soma + numero;  
  i++;
  function myFunction() {
    document.open();
    document.write("a soma dos 20 numeros e: ", soma);
    document.close();
  }
}
while (i < 20){
    myFunction()
}