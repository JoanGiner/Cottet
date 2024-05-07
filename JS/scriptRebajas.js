// Animaciones Scroll

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
    	document.getElementById("movimiento").style.backdropFilter = "blur(10px)";

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



  	if (posActualScroll<3100) {
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
	document.getElementById("logo").style.paddingLeft = "5%";
}

// Para abrir y cerrar el filtro

function abrirFiltro() {
	document.getElementById("partesDelFiltro").style.opacity = "1";
	document.getElementById("partesDelFiltro").style.display = "flex";
	document.getElementById("bacgroundFiltro").style.width = "100%";
	document.getElementById("bacgroundFiltro").style.backgroundColor = "#f0f0f0";
	document.getElementById("iconoFiltro").style.fill = "#1F7862";
	document.getElementById("nombreFiltro").style.color = "#1F7862";
	document.getElementById("partesDelFiltro").style.width = "90%";
	document.getElementById("iconoFiltro0").style.width = "10%";
	document.getElementById("bacgroundFiltro2").style.height = "70px";
	document.getElementById("barraFiltro").style.opacity = "1";
	document.getElementById("precioFiltroo").style.opacity = "1";

}

function cerrarFiltro(){
	document.getElementById("partesDelFiltro").style.display = "none";
	document.getElementById("partesDelFiltro").style.opacity = "1";
	document.getElementById("bacgroundFiltro").style.width = "10%";
	document.getElementById("bacgroundFiltro2").style.height = "0px";
	document.getElementById("bacgroundFiltro").style.backgroundColor = "#1F7862";
	document.getElementById("partesDelFiltro").style.width = "	0%";
	document.getElementById("iconoFiltro").style.fill = "#f0f0f0";
	document.getElementById("nombreFiltro").style.color = "#f0f0f0";
	document.getElementById("iconoFiltro0").style.width = "100%";
}

// Seleccion de Forma

function filtroSeleccion1(){
	document.getElementById("cuadradoForma1").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma2").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion2(){
	document.getElementById("cuadradoForma1").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma2").style.backgroundColor = "#1F7862";
}

// Seleccion de Marca

function filtroSeleccion3(){
	document.getElementById("cuadradoForma3").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma4").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma5").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma6").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma7").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma8").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma9").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma10").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion4(){
	document.getElementById("cuadradoForma4").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma3").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma5").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma6").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma7").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma8").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma9").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma10").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion5(){
	document.getElementById("cuadradoForma5").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma4").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma3").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma6").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma7").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma8").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma9").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma10").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion6(){
	document.getElementById("cuadradoForma6").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma4").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma5").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma3").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma7").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma8").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma9").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma10").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion7(){
	document.getElementById("cuadradoForma7").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma4").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma5").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma6").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma3").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma8").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma9").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma10").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion8(){
	document.getElementById("cuadradoForma8").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma4").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma5").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma6").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma7").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma3").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma9").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma10").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion9(){
	document.getElementById("cuadradoForma9").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma4").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma5").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma6").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma7").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma8").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma3").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma10").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion10(){
	document.getElementById("cuadradoForma10").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma4").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma5").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma6").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma7").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma8").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma9").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma3").style.backgroundColor = "#cbcbcb";
}

// Seleccion de Genero

function filtroSeleccion11(){
	document.getElementById("cuadradoForma12").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma11").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma13").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma14").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion12(){
	document.getElementById("cuadradoForma11").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma12").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma13").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma14").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion13(){
	document.getElementById("cuadradoForma12").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma13").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma11").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma14").style.backgroundColor = "#cbcbcb";
}

function filtroSeleccion14(){
	document.getElementById("cuadradoForma12").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma14").style.backgroundColor = "#1F7862";
	document.getElementById("cuadradoForma13").style.backgroundColor = "#cbcbcb";
	document.getElementById("cuadradoForma11").style.backgroundColor = "#cbcbcb";
}

// pantalla de error
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

// RESPONSIVE

function responsive(){
	if (window.matchMedia("(max-width: 1024px)").matches) {
	  console.log("-996");
	  
	  if (posActualScroll<2100) {
  		document.getElementById("logoCottet").style.position = "relative";
  		document.getElementById("logoCottet").style.left = "1000px";
  	}
  	else {
  		document.getElementById("logoCottet").style.left = "0px";
  	}

  }

} 