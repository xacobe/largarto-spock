function turno(miTurno, suTurno, result, resultWhy)
{
  // Difinir la variable miTurno como value del botón 
  miTurno = miTurno.value;
  
  // Hacer un random para definir la variable suTurno
  var suTurno = ['Piedra', 'Papel', 'Tijera'][Math.floor(Math.random() * 3)];
  var bothTurno = miTurno + suTurno;  
  
  // ******** Posible resultados ******** //
  
// Empate
    if (
      bothTurno == "PiedraPiedra" ||
      bothTurno == "TijeraTijera" ||
      bothTurno == "LagartoLagarto" ||
      bothTurno == "SpockSpock" ||
      bothTurno == "PapelPapel") { 
      
      result = "Empate";
      resultWhy = "parece que estabais pensando lo mismo...";}
      
// Has Perdido!
      else if (
      bothTurno == "LagartoTijeras" ||
      bothTurno == "PiedraPapel" ||
      bothTurno == "PapelTijera" ||
      bothTurno == "TijeraPiedra") {
        
      result = "Has Perdido!";}
      
  // Has Ganado!
      else if (
      bothTurno == "PiedraTijera" ||
      bothTurno == "PapelPiedra" ||
      bothTurno == "TijeraPapel") {
        
      result = "Has Ganado!!!";}
  
     else ( result = "Whaaatt!!!")

// ********** Texto explicativo del resultado ************//
  if ( 
    bothTurno == "PiedraPapel" || 
    bothTurno == "PapelPiedra") { 
    
    var resultWhy = "El Papel envuelve a la Piedra";}
  
  else if ( 
    bothTurno == "PapelTijera" || 
    bothTurno == "TijeraPapel") {
    
    var resultWhy = "La tijera corta el papel";}
  else if ( 
    bothTurno == "PiedraTijera" || 
    bothTurno == "TijeraPiedra") {
    
    var resultWhy = "La Piedra rompe las Tijeras";}
  
  
  
  document.getElementById("demo").innerHTML = miTurno;
  document.getElementById("demo2").innerHTML = suTurno;
  document.getElementById("js-infobox-main").innerHTML = result;
  document.getElementById("js-infobox-details").innerHTML = resultWhy;
  
  
}