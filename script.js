// Função para obter a data final da contagem regressiva (30 minutos a partir do momento em que a página é carregada)
function getFinalDate() {
  var currentDate = new Date();
  var finalDate = new Date(currentDate.getTime() + 30 * 60000); // Adiciona 30 minutos
  return finalDate;
}

// Define a data final inicial da contagem regressiva
var countDownDate = getFinalDate().getTime();

// Atualize a contagem regressiva a cada segundo
var x = setInterval(function () {
  // Obtenha a data e hora atual
  var now = new Date().getTime();

  // Calcule a diferença entre a data final e a data atual
  var distance = countDownDate - now;

  // Calcule os dias, horas, minutos e segundos restantes
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exiba o resultado na div com o id "countdown"
  document.getElementById("countdown").innerHTML =
    "Essa promoção termina em: " + minutes + ":" + seconds;

  // Se a contagem regressiva terminar, exiba uma mensagem e reinicie
  if (distance < 0) {
    clearInterval(x);
    countDownDate = getFinalDate().getTime(); // Reinicia a contagem regressiva com uma nova data final
  }
}, 1000);
