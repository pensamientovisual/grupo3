$(document).ready(function(){
    var comunas = $(".comuna");
  
    comunas.mouseenter(function(){
      var idComuna = $(this).attr("id");
      $("#nombrecomuna").text(idComuna);
      
    });
  
    comunas.mouseleave(function(){
    $("#nombrecomuna").text("NOMBRE COMUNA");
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

    const svg = d3.select("#jajnjan")
              .append("svg")
              .attr("width", 600)
              .attr("height", 600);

    svg.append("g").attr("id", "linea-comuna-1")
    svg.append("g").attr("id", "linea-comuna-2")       

    // Funcion para graficar datos
  function graficarDatos1(datos) { 
    svg.select("#linea-comuna-1")
      .selectAll("rect")
      .data(datos)
      .join("rect")
      .attr("width", 50)
      .attr("fill", "magenta")
      .attr("height", (d) => d.frecuencia)
      .attr("height", function(d) {return d.frecuencia})
      .attr("x", (_, i) => 50 + i * 100);
}

function graficarDatos2(datos) { 
  svg.select("#linea-comuna-2")
    .selectAll("rect")
    .data(datos)
    .join("rect")
    .attr("width", 50)
    .attr("fill", "magenta")
    .attr("height", (d) => d.frecuencia)
    .attr("height", function(d) {return d.frecuencia})
    .attr("x", (_, i) => 50 + i * 100);
}
 
  });