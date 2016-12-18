//Cuando todos los documentos se cargan ejecuta este script
$(document).ready(function(){
  //oculto las respuestas
  $('.respuestas').hide();

  $('.preguntas').click(function() {
    //muestro el siguiente elemento de la pregunta sobre la que se ha hecho click
    $(this).next().slideToggle();
  });

  //Fondo
  $('.cambioColor').change(function() {
    //cambio el color del fondo por el seleccionado en el input
    $('body').css('background-color', $('#colorCambio').val());
  });


});
