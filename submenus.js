var titulos=new Array();
var enlaces=new Array();

titulos[0]=new Array(
    "Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Pirque","San José de Maipo","Macul","Maipú","Ñuñoa","Padre Hurtado","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquín","San Miguel","San Ramón","Santiago","Vitacura");
enlaces[0]=new Array("#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#");
titulos[1]=new Array(
    "Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Pirque","San José de Maipo","Macul","Maipú","Ñuñoa","Padre Hurtado","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquín","San Miguel","San Ramón","Santiago","Vitacura");
enlaces[1]=new Array("#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#");
titulos[2]=new Array(
    "Casos Activos",
    "Defunciones",
    "Población en situación de pobreza",
    "Población vacunada 2º dosis",
    );
enlaces[2]=new Array("#","#","#","#");	

var menu=new Array()
var submenu=new Array()

window.onload = function() {
    for (i=0;i<titulos.length;i++) {
        menu[i]=document.getElementById("seccion"+i);
        menu[i].innerHTML+="<div id='subseccion"+i+"'></div>"
        submenu[i]=document.getElementById('subseccion'+i);
        for (j=0; j<titulos[i].length;j++) {
            submenu[i].innerHTML += "<p><a href='"+enlaces[i][j]+"'>"+titulos[i][j]+"</a></p>";
            }
        menu[i].style.position="relative";
        submenu[i].style.position="absolute";
        submenu[i].style.top="100%";
        submenu[i].style.left="0px";
        submenu[i].style.backgroundColor="#36726a";
        submenu[i].style.font="normal 0.8em arial";
        submenu[i].style.padding="0.2em 0.5em";
        submenu[i].style.display="none"
        }
    for (i=0;i<titulos.length;i++) {
        menu[i].onmouseover = ver;
        menu[i].onmouseout = ocultar;
        } 
}

function ver() {
    muestra=this.getElementsByTagName("div")[0];
    muestra.style.display="block"
    }

function ocultar() {
    oculta=this.getElementsByTagName("div")[0];
    oculta.style.display="none"
    }