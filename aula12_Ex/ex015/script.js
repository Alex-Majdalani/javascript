function verificar() {
  var data = new Date();
  var ano = data.getFullYear;
  var fano = window.document.getElementById("inasc");
  var res = window.document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    window.alert("Tudo OK!");
  }
}
