$(document).ready(function() {
    //Ejercicio 2 filtros

    //1
    //$("p[class]").css('background-color', 'yellow');

    //2
    //$("p[id = 'parrafo1']").css('background-color', 'darkgreen');

    //3
    //$("p[id ^= 'par']").css('font-family', 'Verdana').css('font-weight', 'bold');

    //4
    //$("p:not([class = clase1], [class])").css('background-color', 'darkgreen');//Nota -> la "," en los selectores de atributos es para decir "o"

    //5
    /*$("p[id *= 'afo']").click(function() {
        $(this).animate({'opacity': '0.25', 'border-width': '200px'}, "slow");
      });
      */

    //6 dudas, empieza por par¿?
    //$("p[class ^= 'par'][align = 'center']").css('text-transform', 'uppercase');
    //Nota -> Para indicar que se cumpla esto, y esto hay que juntarlos [][]. Separados no va.

    //7
    /*$("p[id $= '1']").hover(
        function() {
            $(this).slideToggle();
        },
        function() {
            $(this).slideToggle();
        }
    );*/

    //8
    //$("h1, h2, h3").css('background-color', 'rgb(32, 227, 215)');

    //9
    $("*[id = 'pf1'], h2, p[align = center]").css('text-transform', 'lowercase').click(function() {
      alert("Has clickado");
    });

});
