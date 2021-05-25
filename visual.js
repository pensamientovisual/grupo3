$(document).ready(function(){
    var comunas = $(".comuna");
  
    comunas.mouseenter(function(){
      var idComuna = $(this).attr("id");
      $("#nombrecomuna").text(idComuna);
      
    });
  
    comunas.mouseleave(function(){
    $("#nombrecomuna").text("¿CUÁL ES TU COMUNA DE INTERÉS?");
    });

    var boton1 = $(".cerrillos")
    var boton2 = $(".cerronavia")
    var boton3 = $(".conchali")
    var boton4 = $(".elbosque")
    var boton5 = $(".estacioncentral")
    var boton6 = $(".huechuraba")
    var limpiar = $("#boton")
    
    boton1.click(function(){
      $("#gcerrillos").css("display","block");
    
    });

    boton2.click(function(){
      $("#gcerronavia").css("display","block");
    });


    limpiar.click(function(){
      $("#gcerrillos").css("display","none")
      $("#gcerronavia").css("display","none")
    });





 
  });