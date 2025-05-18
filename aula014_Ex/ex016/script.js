function clicar() {
  var ini = window.document.getElementById("ini");
  var fim = window.document.getElementById("ifim");
  var pass = window.document.getElementById("ipass");
  var res = window.document.getElementById("res");
  var i = ini.value;
  var f = fim.value;
  var p = pass.value;

  for (i; i <= f; i += p) {
    console.log(i);
  }
  res.innerHTML = `A contagem é`;
}
