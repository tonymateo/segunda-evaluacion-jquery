//Cuando todos los documentos se cargan ejecuta este script
$(document).ready(function(){
  console.log("jQuery");

/*$(document).ready(function functionName(){
  //Accediendo al parrafo
  $("p").click(function() {
    $('p').html('Cambio desde jQuery')
  })*/

  $('#p1').click(function() {
    $('#p1').html('Cambio desde jQuery con id');
  });

  $('#caja1').css('color', 'blue').css('font-weight', 'bold');

  $('#p2').css(
    {
      'color': 'red',
      'font-weight': 'bold',
      'font-size': '25px'
    }
  );

  //cambio de clase
  $('div').click(function(){
    $(this).addClass('clase2');
  });

  $('#desaparece').click(function() {
    $('.clase1, .clase2').fadeTo('slow',0);//fadeTo(velocidad)
  });

});
