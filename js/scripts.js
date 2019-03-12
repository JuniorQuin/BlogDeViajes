/*$(document).ready(function(){
    $('#contenido').append("con jQuery es mas facil");
});

document.addEventListener('DOMContentLoaded',function(event){
    var elemento=document.getElementById('contenido2');
    var parrafo=document.createElement('p');
    var texto=document.createTextNode('con javascript es mas dificil');

    parrafo.appendChild(texto);
    elemento.appendChild(parrafo);
});
*/

/*jQuery(document).ready(function(){
    console.log("listo 1");
});
*/
$(function(){//FORMA MAS CORTA 
    'use strict';

    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click',mostrarTabs);

    function mostrarTabs(){
        var enlace=$(this).attr('href');
        
        $('.nuestros-servicios div').hide();
        $(enlace).show();

        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');


        return false;//para q ya no brinque la pantalla
        

    }

    /*
    var proximosViajes=['Londres','Valencia','Madrir','Paris','Milan'];

    $.each(proximosViajes,function(i,v){//para arreglos
        //console.log(i);Nos da el indice
        //console.log(v);Nos da el valor

        if(i==0){
            $('aside').append('<h2>Proximos Viajes</h2>');
        }

        $('aside').append('<li>'+ v + '</li>');
    });

    var viajesPorFecha={//para objetos
        primero:'londres',
        segundo:'valencia',
        tercero:'madrir',
        cuarto:'paris',
        quinto:'milan'
    };

    $.each(viajesPorFecha,function(i,v) {
        if(i=="primero"){
            $('aside').append('<h2>Proximas Fechas</h2>');
        }
        $('aside').append('<li>'+i+'-'+v+'</li>');
    });
    
    */

   // $('aside').load('promociones.html');//para esto necesitamos un servidor local, que aun no tenemos

    /*
    $('.logo img').click(function(){//otra manera de crear un click
        $('main article:first').slideUp(1000);
    });

    $('aside').on('click',function(){
        $('main article:first').slideDown(1000);
    });
    */


    /*
    $('.logo img').on('click',function(){
        $(this).animate({'width':'200px'},1000);
    });

    $('main img').on('mouseenter',aumentarImagen);
    $('main img').on('mouseleave',disminuirImagen);


    function aumentarImagen(){
        $(this).animate({'width':'100%'});
    }

    function disminuirImagen(){
        $(this).animate({'width':'350px'});

    }
    */



    /*
    $('.navegacion').show();

    $('.logo img').css({'width':'400px'});

    $('main article h2').css({'color':'#db008d'});
    
    $('aside').css({'background-color':'#e1e1e1','text-transform':'uppercase','padding':'20px'});

    $('.navegacion ul li a').on('mouseenter',cambiarColor);

    $('.navegacion ul li a').on('mouseleave',regresarColor);

    function cambiarColor(){
        $('.navegacion').css({'background-color':'red'});
    }

    function regresarColor(){
        $('.navegacion').css({'background-color':'#db008d'});
    }
    */





    /*
    $('main article:first img').on('click',function(){
        $(this).attr('src','img/imagen_2.jpg');
    });

    */


    //en la consola
    // seleccionando y cambiando atributos con jQuery
    /*
    $('.navegacion ul li:first a').attr('href');//obtengo el atributo href del enlace a
    $('.navegacion ul li:first a').attr('href','http://www.udemy.com')//cambio el valor del href , puedo realizar esta operacion defrente sin necesidad de ejecutar la linea de arriba

    $('.navegacion ul li:first a').attr('target','_blank')//le agrego el atributo target

    $('article:first img').attr('src');//obtengo la imagen
    $('article:first img').attr('src','img/imagen_2.jpg')//cambio la imagen
    */


    //en la consola
    // obteniendo el texto y actualizandolo

    /*
    $('main article:first h2').text();//muestra el texto del h2

    $('main article:first h2').text("Hola");//cambia el texto

    $('main article:first h2').html("<h1>Londres 2019</h1>");//puedes cambiarle la etiquita

    $('.navegacion ul li:first a').text();
    */

    //en la consola
    //navegando en el DOM con jQuery
    /*
    $('.navegacion');
    
    $('.navegacion').children();//muestra el nav

    $('.navegacion').children().children();//muestra el ul

    $('.navegacion').children().children().children();//muestra el li

    $('article:first');

    $('article:first').parent();//muestra al padre q es el "main"

    $('article:first').parent().children()[2];//se va al padre "main" luego se va  a los hijos y como son 3 articles escojo el q esta en la posicion "2"

    $('article:first').next();//salta al siguiente article

    $('article:first').next().next();//salta al siguiente article

    */


    /*
    $('main').on({
        click: function(){
            $(this).addClass('fondorojo activo');
        }, mouseenter: function(){
            $(this).addClass('fondorojo');
        },mouseleave : function(){
            $(this).addClass('activo');
        }
    })
    */
   





   /* $('main article:first').remove();//eliminando un elemento*/
    //$('main article:first').hide();//poniendo display al elemento

    //var copia=$('main article:last').clone();

    /*
    //agrega al final
    $('main').append(copia);

    //agrega al inicio
    $('main').prepend(copia);

    */
    //Otra manera

    /*
    $(copia).appendTo('main');

    $(copia).prependTo('main');
    */

    /*
    $('div.logo img').on('click',function(){
        //console.log("has hecho click en el logo");
        $(this).remove();
    });
    */
    /*
   $('div.logo img').on('mouseenter',function(){
        console.log("sobre el logo");
   });

   $('div.logo img').on('mouseleave',function(){
        console.log("fuera del logo");
   
    });
    */
    /*
    $('#menu').on('click',function(){
        $('#navegacion').show();
        
    });
    */

    /*
    $('div.logo img').addClass('activo');

    $('.navegacion').show();

    //$('.navegacion nav ul li:first').addClass('activo');

    $('main article:first').addClass('activo');

    $('.navegacion ul li a').on('click',function(event){

        $('.navegacion ul li a').removeClass('activo');
        event.preventDefault();

        $(this).addClass('activo');
    });
    */
    



});
