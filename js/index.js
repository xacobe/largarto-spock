var miMarcador = 1;
var suMarcador = 1;
var miTurno = 0;
var suTurno = 0;
var result = 0;
var bothTurno = 0;
var resultWhy = 0;

function turno(miTurno, suTurno, result, resultWhy) {
  // Difinir la variable miTurno como value del botón 
  miTurno = miTurno.value;

  // Hacer un random para definir la variable suTurno
  var suTurno = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"][Math.floor(Math.random() * 5)];
  var bothTurno = miTurno + suTurno;
  var resultWhy = "still no content no result en Why variable";

  // ******** Posible resultados ******** //

  /*
   * Empate
   */ 

  if (
    bothTurno == "PiedraPiedra" ||
    bothTurno == "TijeraTijera" ||
    bothTurno == "LagartoLagarto" ||
    bothTurno == "SpockSpock" ||
    bothTurno == "PapelPapel") {

    /* Añadiendo algunos efectos segun el resultado */ 
    var playerImg = document.querySelector("#js-player-img");
    playerImg.classList.add("bg-warning");
    playerImg.classList.remove("bg-success");
    playerImg.classList.remove("bg-danger");
    
    var oponenImg = document.querySelector("#js-oponent-img");
    oponenImg.classList.add("bg-warning");
    oponenImg.classList.remove("bg-success");
    oponenImg.classList.remove("bg-danger");

    /* Definiendo variables de textos  segun resultado*/
    result = "Empate";
    resultWhy = "Hey spock! sin telepatía";
  }

  /*
   * Has Perdido!
   */
  else if (
    bothTurno == "PiedraPapel" ||
    bothTurno == "PiedraSpock" ||
    bothTurno == "PapelTijera" ||
    bothTurno == "PapelLagarto" ||
    bothTurno == "TijeraPiedra" ||
    bothTurno == "TijeraSpock" ||
    bothTurno == "LagartoTijera" ||
    bothTurno == "LagartoPiedra" ||
    bothTurno == "SpockLagarto" ||
    bothTurno == "SpockPapel") {

    /* Añadiendo algunos efectos segun el resultado */ 
    var playerImg = document.querySelector("#js-player-img");
    playerImg.classList.add("bg-danger");
    playerImg.classList.remove("bg-success");
    playerImg.classList.remove("bg-warning");
    
    var oponentImg = document.querySelector("#js-oponent-img");
    oponentImg.classList.remove("bg-danger");
    oponentImg.classList.add("bg-success");
    oponentImg.classList.remove("bg-warning");

    result = "Has Perdido!";

    suMarcador += 1;   }

  /*
   * Has Ganado!
   */

  else if (
    bothTurno == "PiedraTijera" ||
    bothTurno == "PiedraLagarto" ||
    bothTurno == "PapelSpock" ||
    bothTurno == "PapelPiedra" ||
    bothTurno == "TijeraLagarto" ||
    bothTurno == "TijeraPapel" ||
    bothTurno == "LagartoSpock" ||
    bothTurno == "LagartoPapel" ||
    bothTurno == "SpockTijera" ||
    bothTurno == "SpockPiedra") {

    /* Añadiendo algunos efectos segun el resultado */ 
    var playerImg = document.querySelector("#js-player-img");
    playerImg.classList.add("bg-success");
    playerImg.classList.remove("bg-warning");
    playerImg.classList.remove("bg-danger");
    
    var oponentImg = document.querySelector("#js-oponent-img");
    oponentImg.classList.remove("bg-success");
    oponentImg.classList.remove("bg-warning");
    oponentImg.classList.add("bg-danger");

    miMarcador += 1;

    result = "Has Ganado";
  } else(result = "Whaaatt!!!")

  /********************
   * Texto explicativo del resultado 
   *********************/

  if (
    bothTurno == "PiedraPapel" ||
    bothTurno == "PapelPiedra") {

    var resultWhy = "El papel envuelve a la piedra";
  } else if (
    bothTurno == "PiedraLagarto" ||
    bothTurno == "LagartoPiedra") {

    var resultWhy = "La piedra aplasta al lagarto";
  }
  else if (
    bothTurno == "PiedraTijera" ||
    bothTurno == "TijeraPiedra") {

    var resultWhy = "La piedra rompe las tijeras";
  }
  else if (
    bothTurno == "PapelTijera" ||
    bothTurno == "TijeraPapel") {

    var resultWhy = "La tijera corta el papel";
  }
  else if (
    bothTurno == "PapelLagarto" ||
    bothTurno == "LagartoPapel") {

    var resultWhy = "El lagarto come al papel";
  }
  else if (
    bothTurno == "TijeraLagarto" ||
    bothTurno == "LagartoTijera") {

    var resultWhy = "La tijera decapita al lagarto";
  }
  else if (
    bothTurno == "SpockTijera" ||
    bothTurno == "TijeraSpock") {

    var resultWhy = "Spock rompe con las tijeras";
  }

  else if (
    bothTurno == "SpockPapel" ||
    bothTurno == "PapelSpock") {

    var resultWhy = "El papel desaprueba a Spock";
  }

  else if (
    bothTurno == "SpockPiedra" ||
    bothTurno == "PiedraSpock") {

    var resultWhy = "Spock vaporiza la piedra";
  }

  else if (
    bothTurno == "SpockLagarto" ||
    bothTurno == "LagartoSpock") {

    var resultWhy = "El lagarto envenena a Spock";
  }

  /********** Asignando imagenes al Player ****/
  if (
    miTurno == "Piedra") {

    var miTurno = "<i class='fa fa-hand-rock-o'></i>";
  } else if (
    miTurno == "Papel") {

    var miTurno = "<i class='fa fa-hand-paper-o'></i>";
  } else if (
    miTurno == "Tijera") {

    var miTurno = "<i class='fa fa-hand-scissors-o'></i>";
  } else if (
    miTurno == "Spock") {

    var miTurno = "<i class='fa fa-hand-spock-o'></i>";
  } else if (
    miTurno == "Lagarto") {

    var miTurno = "<i class='fa fa-hand-lizard-o'></i>";
  }

  /********** Asignando imagenes al Oponent ****/
  if (
    suTurno == "Piedra") {

    var suTurno = "<i class='fa fa-hand-rock-o'></i>";
  } else if (
    suTurno == "Papel") {

    var suTurno = "<i class='fa fa-hand-paper-o'></i>";
  } else if (
    suTurno == "Tijera") {

    var suTurno = "<i class='fa fa-hand-scissors-o'></i>";
  } else if (
    suTurno == "Spock") {

    var suTurno = "<i class='fa fa-hand-spock-o'></i>";
  } else if (
    suTurno == "Lagarto") {

    var suTurno = "<i class='fa fa-hand-lizard-o'></i>";
  }

  document.getElementById("js-player-marcador").innerHTML = miMarcador;
  document.getElementById("js-oponent-marcador").innerHTML = suMarcador;

  document.getElementById("js-player-img").innerHTML = miTurno;
  document.getElementById("js-oponent-img").innerHTML = suTurno;
  document.getElementById("js-infobox-main").innerHTML = result;
  document.getElementById("js-infobox-details").innerHTML = resultWhy;

}