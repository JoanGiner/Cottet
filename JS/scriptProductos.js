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
    if(posActualScroll>100) {
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

// FOOTER

  	if (posActualScroll<800) {
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

function todoAcordeon2(){
	let titulo = document.getElementsByClassName("tituloAcordeon2");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon2);
	 	}
}
function desplegarAcordeon2(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight2");
}



function todoAcordeon3(){
	let titulo = document.getElementsByClassName("tituloAcordeon3");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon3);
	 	}
}
function desplegarAcordeon3(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight3");
}



function todoAcordeon4(){
	let titulo = document.getElementsByClassName("tituloAcordeon4");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon4);
	 	}
}
function desplegarAcordeon4(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight4");
}



function todoAcordeon5(){
	let titulo = document.getElementsByClassName("tituloAcordeon5");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon5);
	 	}
}
function desplegarAcordeon5(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight5");
}
// Fin del acordeon

// CARRUSEL VERTICAL

function todoCarrusel(){
  let funcionCarrusel = document.getElementsByClassName("imgCarrusel");
   
   for (let i = 0; i < funcionCarrusel.length; i++) {
      funcionCarrusel[i].addEventListener("click", imagenGrande);
    }
}
function imagenGrande(){
  let llamarImagen = event.currentTarget.src;
  document.getElementById("imgGrande").src = llamarImagen;
  
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

  	if (posActualScroll<100) {
  	}
  	else {
	    document.getElementById("movimiento").style.top = "-125px";

  	}
  // footer responsive

  	if (posActualScroll<1500) {
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

function todoAcordeon2(){
	let titulo = document.getElementsByClassName("tituloAcordeon2");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon2);
	 	}
}
function desplegarAcordeon2(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight2");
}



function todoAcordeon3(){
	let titulo = document.getElementsByClassName("tituloAcordeon3");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon3);
	 	}
}
function desplegarAcordeon3(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight3");
}



function todoAcordeon4(){
	let titulo = document.getElementsByClassName("tituloAcordeon4");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon4);
	 	}
}
function desplegarAcordeon4(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight4");
}



function todoAcordeon5(){
	let titulo = document.getElementsByClassName("tituloAcordeon5");
	 
	 for (let i = 0; i < titulo.length; i++) {
	 		titulo[i].addEventListener("click", desplegarAcordeon5);
	 	}
}
function desplegarAcordeon5(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight5");
}
// Fin del acordeon

// CARRUSEL VERTICAL

function todoCarrusel(){
  let funcionCarrusel = document.getElementsByClassName("imgCarrusel");
   
   for (let i = 0; i < funcionCarrusel.length; i++) {
      funcionCarrusel[i].addEventListener("click", imagenGrande);
    }
}
function imagenGrande(){
  let llamarImagen = event.currentTarget.src;
  document.getElementById("imgGrande").src = llamarImagen;
  
}


}
