$(document).ready(function(){
    var comunas = $(".comuna");
  
    comunas.mouseenter(function(){
      var idComuna = $(this).attr("id");
      $("#nombrecomuna").text(idComuna);
      
    });
  
    comunas.mouseleave(function(){
    $("#nombrecomuna").text("COMUNA");
    });

    $(".st0").mouseenter(function(){
      $(".st0").css("fill","#c7dcd3")
      $(".st1").css("fill","#015d57")
    });

    $(".st0").mouseleave(function(){
      $(".st1").css("fill","#c7dcd3")
      $(".st0").css("fill","#015d57")

    });
    $(".st0").click(function(){
      $("#conclusion1").css("display","block");
      $(".st0").css("fill","#c7dcd3")
      $(".st1").css("fill","#015d57")

    });
    $("#Capa_3").click(function(){
      $("#conclusion1").css("display","none")
      $(".st1").css("fill","#c7dcd3")
      $(".st0").css("fill","#015d57")
    });

    $("#Capa_3").mouseenter(function(){
      $("#Capa_3").css("fill","white");

    });
    $("#Capa_3").mouseleave(function(){
      $("#Capa_3").css("fill","#015d57");

    });

    $(".st4").mouseenter(function(){
      $(".st4").css("fill","#c7dcd3")
      $(".st3").css("fill","#015d57")
    });

    $(".st4").mouseleave(function(){
      $(".st3").css("fill","#c7dcd3")
      $(".st4").css("fill","#015d57")

    });
    $(".st4").click(function(){
      $("#conclusion2").css("display","block");
      $(".st4").css("fill","#c7dcd3")
      $(".st3").css("fill","#015d57")
    
    });
    $("#Capa_5").mouseenter(function(){
      $("#Capa_5").css("fill","white");

    });
    $("#Capa_5").mouseleave(function(){
      $("#Capa_5").css("fill","#015d57");

    });
    $("#Capa_5").click(function(){
      $("#conclusion2").css("display","none")
      $(".st3").css("fill","#c7dcd3")
      $(".st4").css("fill","#015d57")
    });

    
    $(".st6").mouseenter(function(){
      $(".st6").css("fill","#c7dcd3")
      $(".st7").css("fill","#015d57")
    });

    $(".st6").mouseleave(function(){
      $(".st7").css("fill","#c7dcd3")
      $(".st6").css("fill","#015d57")

    });
    $(".st6").click(function(){
      $("#conclusion3").css("display","block");
      $(".st6").css("fill","#c7dcd3")
      $(".st7").css("fill","#015d57")
    
    });
    $("#Capa_7").mouseenter(function(){
      $("#Capa_7").css("fill","white");

    });
    $("#Capa_7").mouseleave(function(){
      $("#Capa_7").css("fill","#015d57");

    });
    $("#Capa_7").click(function(){
      $("#conclusion3").css("display","none")
      $(".st7").css("fill","#c7dcd3")
      $(".st6").css("fill","#015d57")
    });
 
  });