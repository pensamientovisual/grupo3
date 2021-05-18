const svg = d3.select("#fotos")
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

d3.csv("datos.csv")
  .then((datos) => {
    console.log(datos);
    graficarDatos(datos);


  })
  .catch((error) => console.log(error));


datos = [
  {id: "CR", nombre: "Las Condes", pobreza: 0.3, casos: 30000}, 
  {id: "HC", nombre: "Providencia", pobreza: 0.3, casos: 30000},, 
  {}, 
  {}
]


// Tambien se puede agregar una funcion extra que haga algun procesamiento
// de los datos

// En este caso, se transforma cada dato a un objeto, y la frecuencia se transforma
// de string a int
const procesamiento = (d) => ({
  categoria: d.categoria,
  frecuencia: parseInt(d.frecuencia),
});

d3.csv("datos.csv", procesamiento) // se pasa la funcion como argumento
  .then((datos) => {
    console.log(datos);
    graficarDatos(datos);
  })
  .catch((error) => console.log(error));



// <li class="boton-comuna-1" id="CE"> Cerrillos </li>
// <li class="boton-comuna-1" id="HC"> Huechuraba </li>


// <li class="boton-comuna-2" id="CE"> Cerrillos </li>
// <li class="boton-comuna-2" id="HC"> Huechuraba </li>


$(".boton-comuna-1").click(function(){
  var idComuna = $(this).attr("id")

  var dataComuna = datos.filter(function(id) {return datos.id}) 

  graficarDatos1(dataComuna);

})

$(".boton-comuna-2").click(function(){
  var idComuna = $(this).attr("id")

  var dataComuna = datos.filter(function(id) {return datos.id}) 

  graficarDatos2(dataComuna);

})

function numberColor(digit){
    if (digit <= 5000){
      return '#cccbc7';
    }
    else if (5000<digit <= 10000){
      return '#899a8c';
    }
    else if (10000<digit <= 15000){
        return '#727e70';
    }
    else if (15000<digit <= 20000){
        return '#72cec1';
    }
    else if (20000<digit <= 25000){
        return '#5e8d84';
    }
    else if (25000<digit <= 30000){
        return '#009a8f';
    }
    else{
      return '#36726a';
    }
  };

  d=[20219]
  svg.selectAll('#Condes')
  .data(d)
  .attr('fill', numberColor);