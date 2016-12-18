$(document).ready(function() {
  /*$('button').click(function() {
    $('div:gt(2)').addClass('rosa');//gt greater than (mayor que)
    $('div:eq(2)').addClass('verde');//igual que
    $('div:lt(2)').addClass('rosa');//menor que
    $('div:gt(1)').addClass('verde');
    $('div:even').addClass('verde');//selector impares? pares
    $('div:odd').addClass('rosa');//selector impares

    $('div:not(:eq(2))').addClass('verde');//not para excluir
  });*/

  //Segundo ejercicio

  /*$('button').click(function() {
    $("div:contains('Contenedor 5')").addClass("rojo");//contenido
    $("div:has(ul)").addClass("verde");//has para decir que tiene dentro
    $("div:has(span)").addClass("rosa");
    //$("div:last").addClass("rosa");
    $("div:parent").addClass("rosa");
  });*/

  //Tercer ejercicio

  $('button').click(function() {
    /*$("div[name |= 'enero']").addClass("verde");// |= sirve para decir que empieza por o que tiene un guion
    $("div[name *= 'marzo']").addClass("rojo");//*= sirve para algo que contenga
    $("div[name *= ' abril ']").addClass("azul");
    $("div[name ~= 'enero']").addClass("azul");//~= sirve para decir que está delimitado por espacios
    */
    //$("div[name $= 'marzo']").addClass("verde");//acabar
    //$("div[name = 'julioabril']").addClass("rojo");
    //$("div[name != 'julioabril']").addClass("verde");
    //$("div[name ^= 'enero']").addClass("rojo");//para que empiece exactamente por esto
    //$("div[miatr]").addClass("verde");
    $("div:eq(4)[name ^= 'enero']").addClass("azul");
    $("div[name ^= 'enero']:eq(4)").addClass("azul");
  });


});
