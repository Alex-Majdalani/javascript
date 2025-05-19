function clicar() {
  var ini = window.document.getElementById("ini");
  var fim = window.document.getElementById("ifim");
  var pass = window.document.getElementById("ipass");
  var res = window.document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    pass.value.length == 0
  ) {
    window.alert("[ERRO] Verifique os dados");
  } else {
    var i = Number(ini.value);
    var f = Number(fim.value);
    var p = Number(pass.value);
    if (p <= 0) {
      window.alert("Passo inválido!");
    }
    //CONTAGEM CRESCENTE
    if (i < f) {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} `;
      }
    } else {
      // CONTAGEM REGRESSIVA
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c}`;
      }
    }
  }
}

var i = Number(ini.value);
var f = Number(fim.value);
var p = Number(pass.value);

/*if (i >= 0 && i <= f) {
    for (i; i >= 0 && i <= f; i += p) {
      res.innerHTML = `O valor é: ${i}`;
    }
  } else {
    window.alert("[ERRO]");
  }
}*/
