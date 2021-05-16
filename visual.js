$(document).ready(function(){
    var comunas = $(".comuna");
  
    comunas.mouseenter(function(){
      var idComuna = $(this).attr("id");
      $("#titulo").text(idComuna);
      
    });
  
    comunas.mouseleave(function(){
    $("#titulo").text("NOMBRE COMUNA");
      $(this).fadeTo("fast",1);
    });
  
  
  });