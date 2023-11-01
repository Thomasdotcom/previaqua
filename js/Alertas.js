document.addEventListener('DOMContentLoaded', () => {
  var Alerta = [];
  var btnAlerta = document.getElementById('city');
 
  btnAlerta.addEventListener('click', function () {
    var cidade = document.getElementById('cidade').value;
    // Substitua espaços por hifens no nome da cidade
    var cidadeFormatada = cidade.replace(/\s+/g, '-');
    var divTela = document.getElementById('resultado');
    divTela.innerHTML = null;
 
    const URL = 'https://alertaeventosclimaticos.azurewebsites.net/api/Alertas/' + cidadeFormatada;
 
    fetch(URL, {
      method: 'GET',
    })
      .then((res) => {
        res.json().then((data) => {
          Alerta = data;
          var Alerts = [Alerta.chuva, Alerta.umidadeMaxima, Alerta.pressao, Alerta.resultado];
          for (let i = 0; i < 4; i++) {
            if (i == 0) {
              if (Alerts[i] == null) {
                divTela.innerHTML += "<li>  Probabilidade de Chuvas: sem dados disponíveis </li>";
              } else {
                divTela.innerHTML += "<li>  Probabilidade de Chuvas: " + Alerts[i] + "mm</li>";
              }
            }
            if (i == 1) {
              if (Alerts[i] == null) {
                divTela.innerHTML += "<li>  Umidade Máxima: sem dados disponíveis </li>";
              } else {
                divTela.innerHTML += "<li>  Umidade Máxima: " + Alerts[i] + "%</li>";
              }
            }
            if (i == 2) {
              if (Alerts[i] == null) {
                divTela.innerHTML += "<li>  Pressão atmosférica: sem dados disponíveis </li>";
              } else {
                divTela.innerHTML += "<li>  Pressão atmosférica: " + Alerts[i] + "mB</li>";
              }
            }
            if (i == 3) {
              if (Alerts[0] == null) {
                divTela.innerHTML += "<li>  Resultado: dados insuficientes </li>";
              } else {
                divTela.innerHTML += "<li>  Resultado: " + Alerts[i] + "</li>";
              }
            }
          }
        });
      });
  }, false);
});