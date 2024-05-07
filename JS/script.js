
if (window.matchMedia("(min-width: 1025px)").matches) {


// Calculo de la posición del scroll

let posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

// Animación menú

function esconderMostrarMenu() {

let posActualScroll = document.documentElement.scrollTop;

// Esto hace que el menu suba y baja

  if (posPreviaScroll > posActualScroll) {
  	document.getElementById("movimiento").style.opacity = "1";
    document.getElementById("movimiento").style.top = "0";
    document.getElementById("movimiento").style.backdropFilter = "blur(0px)";
    if(posActualScroll>200) {
    	document.getElementById("movimiento").style.backgroundColor = "#1F7862";
    	document.getElementById("movimiento").style.opacity = "95%";
    	document.getElementById("movimiento").style.backdropFilter = "blur(5px)";

		}
	else{
	    document.getElementById("movimiento").style.backgroundColor = "";

	}
  } else  {

  	if (posActualScroll<200) {
  	}
  	else {
	    document.getElementById("movimiento").style.top = "-125px";

  	}

// Imagen 1902 animación

  	if (posActualScroll<500) {
  		document.getElementById("imagen1").style.position = "relative";
  		document.getElementById("imagen1").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("imagen1").style.left = "1050px";
  	}

// Texto 1902 animación

  	if (posActualScroll<700) {
  		document.getElementById("texto1").style.position = "relative";
  		document.getElementById("texto1").style.left = "1000px";
  	}
  	else {
  		document.getElementById("texto1").style.left = "0px";
  	}

 // Texto 1995 animación

  	if (posActualScroll<1100) {
  		document.getElementById("texto2").style.position = "relative";
  		document.getElementById("texto2").style.left = "-1100px";
  	}
  	else {
  		document.getElementById("texto2").style.left = "700px";
  	}

// Imagen 1995 animación

  	if (posActualScroll<1300) {
  		document.getElementById("imagen2").style.position = "relative";
  		document.getElementById("imagen2").style.left = "2100px";
  	}
  	else {
  		document.getElementById("imagen2").style.left = "1000px";
  	}

// Imagen actualidad animación

  	if (posActualScroll<1900) {
  		document.getElementById("imagen3").style.position = "relative";
  		document.getElementById("imagen3").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("imagen3").style.left = "1050px";
  	}

// Texto actualidad animación

  	if (posActualScroll<2100) {
  		document.getElementById("texto3").style.position = "relative";
  		document.getElementById("texto3").style.left = "1000px";
  	}
  	else {
  		document.getElementById("texto3").style.left = "0px";
  	}

  	if (posActualScroll<2400) {
  		document.getElementById("tituloCita").style.position = "relative";
  		document.getElementById("tituloCita").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("tituloCita").style.left = "0px";
  	}

  	if (posActualScroll<3000) {
  		document.getElementById("textoCita").style.position = "relative";
  		document.getElementById("textoCita").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("textoCita").style.left = "0px";
  	}

  	if (posActualScroll<3800) {
  		document.getElementById("logoCottet").style.position = "relative";
  		document.getElementById("logoCottet").style.left = "1000px";
  	}
  	else {
  		document.getElementById("logoCottet").style.left = "0px";
  	}
    
  }
  posPreviaScroll = posActualScroll;

}

//	Abrir y cerrar menu 

function abrirMenu() {

	document.documentElement.style.overflow = "hidden";

	let menuOpen = document.getElementsByClassName("burguerMenu")

	for (let i = 0; i < menuOpen.length; i++) {
	menuOpen[i].style.position = "relative";
}
document.getElementById("movimiento").style.top = "0px";
document.getElementById("burguer1").style.top = "12.5%";
document.getElementById("burguer1").style.transform = "rotate(45deg)";
document.getElementById("burguer2").style.transform = "rotate(-45deg)";
document.getElementById("burguerMenu").style.justifyContent = "center";
document.getElementById("burguerMenu2").style.top = "45px";
document.getElementById("movimiento").style.height = "100%";
document.getElementById("movimiento").style.backgroundColor = "#1F7862";
document.getElementById("menu").style.opacity = "1";
document.getElementById("menu1").style.opacity = "1";
document.getElementById("menu2").style.opacity = "1";
document.getElementById("menu3").style.opacity = "1";
document.getElementById("menu4").style.opacity = "1";
document.getElementById("menu5").style.opacity = "1";
document.getElementById("menu6").style.opacity = "1";
document.getElementById("menu7").style.opacity = "1";
document.getElementById("movimiento").style.opacity = "1";
document.getElementById("menuDentro").style.display = "flex";
document.getElementById("logo").style.justifyContent = "flex-start";
document.getElementById("logo").style.padding = "10px";
document.getElementById("logo").style.paddingLeft = "5%";
}

function cerrarMenu() {
	document.documentElement.style.overflow = "auto";
	document.getElementById("burguer1").style.transform = "rotate(0deg)";
	document.getElementById("burguer1").style.top = "";
	document.getElementById("burguer2").style.transform = "rotate(0deg)";
	document.getElementById("burguerMenu").style.justifyContent = "";
	document.getElementById("burguerMenu2").style.top = "-100px";
	document.getElementById("movimiento").style.height = "125px";
	document.getElementById("menu").style.opacity = "0";
	document.getElementById("menu1").style.opacity = "0";
	document.getElementById("menu2").style.opacity = "0";
	document.getElementById("menu3").style.opacity = "0";
	document.getElementById("menu4").style.opacity = "0";
	document.getElementById("menu5").style.opacity = "0";
	document.getElementById("menu6").style.opacity = "0";
	document.getElementById("menu7").style.opacity = "0";
	document.getElementById("movimiento").style.opacity = "95%";
	document.getElementById("menuDentro").style.display = "none";
	document.getElementById("logo").style.justifyContent = "center";
	document.getElementById("logo").style.padding = "0px";
}

let timeout;

function abrirError() {
	document.getElementById("movimiento").style.display = "none";
	document.documentElement.style.overflow = "hidden";
	document.getElementById("error404").style.opacity = "1";
	document.getElementById("error404").style.height = "1080px";
  timeout = setTimeout(alertFunc, 2500);
}

function alertFunc() {
	document.getElementById("movimiento").style.display = "flex";
  document.documentElement.style.overflow = "auto";
  document.getElementById("error404").style.opacity = "0";
  document.getElementById("error404").style.height = "0px";
}

let timeout2;
let timeout3;
let timeout4;


timeout2 = setTimeout(menuCarga, 1500)


function menuCarga() {
	document.getElementById("movimientoBarra").style.width = "100%";
	timeout3 = setTimeout(cambioPagina, 4000);
	timeout4 = setTimeout(primerPorcen, 200);
	timeout4 = setTimeout(segundoPorcen, 400);
	timeout4 = setTimeout(tercerPorcen, 600);
	timeout4 = setTimeout(cuartoPorcen, 800);
	timeout4 = setTimeout(quintoPorcen, 1000);
	timeout4 = setTimeout(sextoPorcen, 1200);
	timeout4 = setTimeout(septimoPorcen, 1400);
	timeout4 = setTimeout(octavoPorcen, 1600);
	timeout4 = setTimeout(novenoPorcen, 1800);
	timeout4 = setTimeout(decimoPorcen, 2000);
	timeout4 = setTimeout(undecimoPorcen, 2400);
}

function cambioPagina() {
	document.getElementById("pantallaCarga").style.height = "0px";
	document.getElementById("pantallaCarga").style.opacity = "0";
	document.getElementById("pantallaCarga").style.display = "none";

}

function primerPorcen() {
document.getElementById("porcentaje").innerHTML = "10%";
}

function segundoPorcen() {
document.getElementById("porcentaje").innerHTML = "20%";
}

function tercerPorcen() {
document.getElementById("porcentaje").innerHTML = "30%";
}

function cuartoPorcen() {
document.getElementById("porcentaje").innerHTML = "40%";
}

function quintoPorcen() {
document.getElementById("porcentaje").innerHTML = "50%";
}

function sextoPorcen() {
document.getElementById("porcentaje").innerHTML = "60%";
}

function septimoPorcen() {
document.getElementById("porcentaje").innerHTML = "70%";
}

function octavoPorcen() {
document.getElementById("porcentaje").innerHTML = "80%";
}

function novenoPorcen() {
document.getElementById("porcentaje").innerHTML = "90%";
}

function decimoPorcen() {
document.getElementById("porcentaje").innerHTML = "99%";
}

function undecimoPorcen() {
document.getElementById("porcentaje").innerHTML = "100%";
}

timeout6 = setTimeout(cargaGeneral, 10);

function cargaGeneral() {
	timeout6 = setTimeout(opacidadLogo, 0);
	timeout6 = setTimeout(opacidadLogo1, 400);
	timeout6 = setTimeout(cambioPagina2, 1300);
	timeout6 = setTimeout(cambioPagina3, 2000);
}

function opacidadLogo() {
	document.getElementById("logoImagen3").style.opacity = "1";
}

function opacidadLogo1() {
	document.getElementById("movimientoBarra2").style.width = "100%";
}

function cambioPagina2() {
	document.getElementById("pantallaCargaGeneral").style.opacity = "0";
}

function cambioPagina3() {
	document.getElementById("pantallaCargaGeneral").style.display = "none";
}

function cambioPagina() {
	document.getElementById("pantallaCarga").style.height = "0px";
	document.getElementById("pantallaCarga").style.opacity = "0";
	document.getElementById("pantallaCarga").style.display = "none";

}

}

else {
	let posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

// Animación menú

function esconderMostrarMenu() {

let posActualScroll = document.documentElement.scrollTop;

// Esto hace que el menu suba y baja

  if (posPreviaScroll > posActualScroll) {
  	document.getElementById("movimiento").style.opacity = "1";
    document.getElementById("movimiento").style.top = "0";
    document.getElementById("movimiento").style.backdropFilter = "blur(0px)";
    if(posActualScroll>200) {
    	document.getElementById("movimiento").style.backgroundColor = "#1F7862";
    	document.getElementById("movimiento").style.opacity = "95%";
    	document.getElementById("movimiento").style.backdropFilter = "blur(5px)";

		}
	else{
	    document.getElementById("movimiento").style.backgroundColor = "";

	}
  } else  {

  	if (posActualScroll<200) {
  	}
  	else {
	    document.getElementById("movimiento").style.top = "-125px";

  	}

// Imagen 1902 animación

  	if (posActualScroll<500) {
  		document.getElementById("imagen1").style.position = "relative";
  		document.getElementById("imagen1").style.left = "2000px";
  	}
  	else {
  		document.getElementById("imagen1").style.left = "1100px";
  	}

// Texto 1902 animación

  	if (posActualScroll<700) {
  		document.getElementById("texto1").style.position = "relative";
  		document.getElementById("texto1").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("texto1").style.left = "500px";
  	}

 // Texto 1995 animación

  	if (posActualScroll<1100) {
  		document.getElementById("texto2").style.position = "relative";
  		document.getElementById("texto2").style.left = "2000px";
  	}
  	else {
  		document.getElementById("texto2").style.left = "900px";
  	}

// Imagen 1995 animación

  	if (posActualScroll<1300) {
  		document.getElementById("imagen2").style.position = "relative";
  		document.getElementById("imagen2").style.left = "-2000px";
  	}
  	else {
  		document.getElementById("imagen2").style.left = "-300px";
  	}

// Imagen actualidad animación

  	if (posActualScroll<1900) {
  		document.getElementById("imagen3").style.position = "relative";
  		document.getElementById("imagen3").style.left = "2000px";
  	}
  	else {
  		document.getElementById("imagen3").style.left = "1100px";
  	}

// Texto actualidad animación

  	if (posActualScroll<2100) {
  		document.getElementById("texto3").style.position = "relative";
  		document.getElementById("texto3").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("texto3").style.left = "500px";
  	}

  	if (posActualScroll<3000) {
  		document.getElementById("tituloCita").style.position = "relative";
  		document.getElementById("tituloCita").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("tituloCita").style.left = "0px";
  	}

  	if (posActualScroll<3200) {
  		document.getElementById("textoCita").style.position = "relative";
  		document.getElementById("textoCita").style.left = "-1000px";
  	}
  	else {
  		document.getElementById("textoCita").style.left = "0px";
  	}

  	if (posActualScroll<3800) {
  		document.getElementById("logoCottet").style.position = "relative";
  		document.getElementById("logoCottet").style.left = "1000px";
  	}
  	else {
  		document.getElementById("logoCottet").style.left = "0px";
  	}
    
  }
  posPreviaScroll = posActualScroll;

}

//	Abrir y cerrar menu 

function abrirMenu() {

	document.documentElement.style.overflow = "hidden";

	let menuOpen = document.getElementsByClassName("burguerMenu")

	for (let i = 0; i < menuOpen.length; i++) {
	menuOpen[i].style.position = "relative";
}
document.getElementById("movimiento").style.top = "0px";
document.getElementById("burguer1").style.top = "12.5%";
document.getElementById("burguer1").style.transform = "rotate(45deg)";
document.getElementById("burguer2").style.transform = "rotate(-45deg)";
document.getElementById("burguerMenu").style.justifyContent = "center";
document.getElementById("burguerMenu2").style.top = "45px";
document.getElementById("movimiento").style.height = "100%";
document.getElementById("movimiento").style.backgroundColor = "#1F7862";
document.getElementById("menu").style.opacity = "1";
document.getElementById("menu1").style.opacity = "1";
document.getElementById("menu2").style.opacity = "1";
document.getElementById("menu3").style.opacity = "1";
document.getElementById("menu4").style.opacity = "1";
document.getElementById("menu5").style.opacity = "1";
document.getElementById("menu6").style.opacity = "1";
document.getElementById("menu7").style.opacity = "1";
document.getElementById("movimiento").style.opacity = "1";
document.getElementById("menuDentro").style.display = "flex";
document.getElementById("logo").style.justifyContent = "flex-start";
document.getElementById("logo").style.padding = "10px";
document.getElementById("logo").style.paddingLeft = "5%";
}

function cerrarMenu() {
	document.documentElement.style.overflow = "auto";
	document.getElementById("burguer1").style.transform = "rotate(0deg)";
	document.getElementById("burguer1").style.top = "";
	document.getElementById("burguer2").style.transform = "rotate(0deg)";
	document.getElementById("burguerMenu").style.justifyContent = "";
	document.getElementById("burguerMenu2").style.top = "-100px";
	document.getElementById("movimiento").style.height = "125px";
	document.getElementById("menu").style.opacity = "0";
	document.getElementById("menu1").style.opacity = "0";
	document.getElementById("menu2").style.opacity = "0";
	document.getElementById("menu3").style.opacity = "0";
	document.getElementById("menu4").style.opacity = "0";
	document.getElementById("menu5").style.opacity = "0";
	document.getElementById("menu6").style.opacity = "0";
	document.getElementById("menu7").style.opacity = "0";
	document.getElementById("movimiento").style.opacity = "95%";
	document.getElementById("menuDentro").style.display = "none";
	document.getElementById("logo").style.justifyContent = "center";
	document.getElementById("logo").style.padding = "0px";
}

let timeout;

function abrirError() {
	document.getElementById("movimiento").style.display = "none";
	document.documentElement.style.overflow = "hidden";
	document.getElementById("error404").style.opacity = "1";
	document.getElementById("error404").style.height = "1080px";
  timeout = setTimeout(alertFunc, 2500);
}

function alertFunc() {
	document.getElementById("movimiento").style.display = "flex";
  document.documentElement.style.overflow = "auto";
  document.getElementById("error404").style.opacity = "0";
  document.getElementById("error404").style.height = "0px";
}

let timeout2;
let timeout3;
let timeout4;


timeout2 = setTimeout(menuCarga, 1500)


function menuCarga() {
	document.getElementById("movimientoBarra").style.width = "100%";
	timeout3 = setTimeout(cambioPagina, 4000);
	timeout4 = setTimeout(primerPorcen, 200);
	timeout4 = setTimeout(segundoPorcen, 400);
	timeout4 = setTimeout(tercerPorcen, 600);
	timeout4 = setTimeout(cuartoPorcen, 800);
	timeout4 = setTimeout(quintoPorcen, 1000);
	timeout4 = setTimeout(sextoPorcen, 1200);
	timeout4 = setTimeout(septimoPorcen, 1400);
	timeout4 = setTimeout(octavoPorcen, 1600);
	timeout4 = setTimeout(novenoPorcen, 1800);
	timeout4 = setTimeout(decimoPorcen, 2000);
	timeout4 = setTimeout(undecimoPorcen, 2400);
}

function cambioPagina() {
	document.getElementById("pantallaCarga").style.height = "0px";
	document.getElementById("pantallaCarga").style.opacity = "0";
	document.getElementById("pantallaCarga").style.display = "none";

}

function primerPorcen() {
document.getElementById("porcentaje").innerHTML = "10%";
}

function segundoPorcen() {
document.getElementById("porcentaje").innerHTML = "20%";
}

function tercerPorcen() {
document.getElementById("porcentaje").innerHTML = "30%";
}

function cuartoPorcen() {
document.getElementById("porcentaje").innerHTML = "40%";
}

function quintoPorcen() {
document.getElementById("porcentaje").innerHTML = "50%";
}

function sextoPorcen() {
document.getElementById("porcentaje").innerHTML = "60%";
}

function septimoPorcen() {
document.getElementById("porcentaje").innerHTML = "70%";
}

function octavoPorcen() {
document.getElementById("porcentaje").innerHTML = "80%";
}

function novenoPorcen() {
document.getElementById("porcentaje").innerHTML = "90%";
}

function decimoPorcen() {
document.getElementById("porcentaje").innerHTML = "99%";
}

function undecimoPorcen() {
document.getElementById("porcentaje").innerHTML = "100%";
}

timeout6 = setTimeout(cargaGeneral, 10);

function cargaGeneral() {
	timeout6 = setTimeout(opacidadLogo, 0);
	timeout6 = setTimeout(opacidadLogo1, 400);
	timeout6 = setTimeout(cambioPagina2, 1300);
	timeout6 = setTimeout(cambioPagina3, 2000);
}

function opacidadLogo() {
	document.getElementById("logoImagen3").style.opacity = "1";
}

function opacidadLogo1() {
	document.getElementById("movimientoBarra2").style.width = "100%";
}

function cambioPagina2() {
	document.getElementById("pantallaCargaGeneral").style.opacity = "0";
}

function cambioPagina3() {
	document.getElementById("pantallaCargaGeneral").style.display = "none";
}

function cambioPagina() {
	document.getElementById("pantallaCarga").style.height = "0px";
	document.getElementById("pantallaCarga").style.opacity = "0";
	document.getElementById("pantallaCarga").style.display = "none";

}

// ACORDEON
	
function todoAcordeon(){
	let titulo = document.getElementsByClassName("tituloAcordeon");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon);
	 	}
}
function desplegarAcordeon(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight");
}
}