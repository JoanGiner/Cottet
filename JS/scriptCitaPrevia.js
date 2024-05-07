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

  	if (posActualScroll<300) {
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

// CITA PREVIA

// seleccion del tipo de cita quieres.

function seleccionaTipo1(){
	document.getElementById("svg").style.fill = "#1F7862";
	document.getElementById("h3").style.color = "#1F7862";
	document.getElementById("optica").style.backgroundColor = "#f0f0f0";
	document.getElementById("optica").style.border = "3px solid #1F7862";

	document.getElementById("svg2").style.fill = "#f0f0f0";
	document.getElementById("h32").style.color = "#f0f0f0";
	document.getElementById("lentillas").style.backgroundColor = "#1F7862";
	document.getElementById("lentillas").style.border = "3px solid transparent";

	document.getElementById("svg3").style.fill = "#f0f0f0";
	document.getElementById("h33").style.color = "#f0f0f0";
	document.getElementById("audiologia").style.backgroundColor = "#1F7862";
	document.getElementById("audiologia").style.border = "3px solid transparent";
}

function seleccionaTipo2(){
	document.getElementById("svg2").style.fill = "#1F7862";
	document.getElementById("h32").style.color = "#1F7862";
	document.getElementById("lentillas").style.backgroundColor = "#f0f0f0";
	document.getElementById("lentillas").style.border = "3px solid #1F7862";

	document.getElementById("svg3").style.fill = "#f0f0f0";
	document.getElementById("h33").style.color = "#f0f0f0";
	document.getElementById("audiologia").style.backgroundColor = "#1F7862";
	document.getElementById("audiologia").style.border = "3px solid transparent";

	document.getElementById("svg").style.fill = "#f0f0f0";
	document.getElementById("h3").style.color = "#f0f0f0";
	document.getElementById("optica").style.backgroundColor = "#1F7862";
	document.getElementById("optica").style.border = "3px solid transparent";
}

function seleccionaTipo3(){
	document.getElementById("svg3").style.fill = "#1F7862";
	document.getElementById("h33").style.color = "#1F7862";
	document.getElementById("audiologia").style.backgroundColor = "#f0f0f0";
	document.getElementById("audiologia").style.border = "3px solid #1F7862";

	document.getElementById("svg2").style.fill = "#f0f0f0";
	document.getElementById("h32").style.color = "#f0f0f0";
	document.getElementById("lentillas").style.backgroundColor = "#1F7862";
	document.getElementById("lentillas").style.border = "3px solid transparent";

	document.getElementById("svg").style.fill = "#f0f0f0";
	document.getElementById("h3").style.color = "#f0f0f0";
	document.getElementById("optica").style.backgroundColor = "#1F7862";
	document.getElementById("optica").style.border = "3px solid transparent";
}

function seleccionaTipo4() {
	document.getElementById("svg4").style.fill = "#1F7862";
	document.getElementById("titulin").style.color = "#1F7862";
	document.getElementById("barcelona").style.backgroundColor = "#f0f0f0";
	document.getElementById("barcelona").style.border = "3px solid #1F7862";

	document.getElementById("svg5").style.fill = "#f0f0f0";
	document.getElementById("titulin2").style.color = "#f0f0f0";
	document.getElementById("girona").style.backgroundColor = "#1F7862";
	document.getElementById("girona").style.border = "3px solid transparent";

	document.getElementById("svg6").style.fill = "#f0f0f0";
	document.getElementById("titulin3").style.color = "#f0f0f0";
	document.getElementById("madrid").style.backgroundColor = "#1F7862";
	document.getElementById("madrid").style.border = "3px solid transparent";
}

function seleccionaTipo5() {
	document.getElementById("svg5").style.fill = "#1F7862";
	document.getElementById("titulin2").style.color = "#1F7862";
	document.getElementById("girona").style.backgroundColor = "#f0f0f0";
	document.getElementById("girona").style.border = "3px solid #1F7862";

	document.getElementById("svg4").style.fill = "#f0f0f0";
	document.getElementById("titulin").style.color = "#f0f0f0";
	document.getElementById("barcelona").style.backgroundColor = "#1F7862";
	document.getElementById("barcelona").style.border = "3px solid transparent";

	document.getElementById("svg6").style.fill = "#f0f0f0";
	document.getElementById("titulin3").style.color = "#f0f0f0";
	document.getElementById("madrid").style.backgroundColor = "#1F7862";
	document.getElementById("madrid").style.border = "3px solid transparent";
}

function seleccionaTipo6() {
	document.getElementById("svg6").style.fill = "#1F7862";
	document.getElementById("titulin3").style.color = "#1F7862";
	document.getElementById("madrid").style.backgroundColor = "#f0f0f0";
	document.getElementById("madrid").style.border = "3px solid #1F7862";

	document.getElementById("svg4").style.fill = "#f0f0f0";
	document.getElementById("titulin").style.color = "#f0f0f0";
	document.getElementById("barcelona").style.backgroundColor = "#1F7862";
	document.getElementById("barcelona").style.border = "3px solid transparent";

	document.getElementById("svg5").style.fill = "#f0f0f0";
	document.getElementById("titulin2").style.color = "#f0f0f0";
	document.getElementById("girona").style.backgroundColor = "#1F7862";
	document.getElementById("girona").style.border = "3px solid transparent";
}

function botonSiguiente() {
	document.getElementById("botonAnterior").style.display = "flex";
	document.getElementById("progresoBarra").style.width = "50%";
	document.getElementById("botonSiguiente2").style.display = "flex";
	document.getElementById("botonSiguiente").style.display = "none";
	document.getElementById("textoProgreso2").style.color = "#1F7862";
	document.getElementById("redonda2").style.backgroundColor = "#1F7862";
	document.getElementById("contTipo").style.display = "none";
	document.getElementById("contTipo2").style.display = "flex";
}

function botonSiguiente2() {
	document.getElementById("botonAnterior2").style.display = "flex";
	document.getElementById("botonAnterior").style.display = "none";
	document.getElementById("progresoBarra").style.width = "75%";
	document.getElementById("botonSiguiente3").style.display = "flex";
	document.getElementById("botonSiguiente2").style.display = "none";
	document.getElementById("textoProgreso3").style.color = "#1F7862";
	document.getElementById("redonda3").style.backgroundColor = "#1F7862";
	document.getElementById("contTipo2").style.display = "none";
	document.getElementById("contTipo3").style.display = "flex";
}

function botonSiguiente3() {
	document.getElementById("botonAnterior2").style.display = "none";
	document.getElementById("botonAnterior3").style.display = "flex";
	document.getElementById("progresoBarra").style.width = "100%";
	document.getElementById("botonSiguiente4").style.display = "flex";
	document.getElementById("botonSiguiente3").style.display = "none";
	document.getElementById("textoProgreso4").style.color = "#1F7862";
	document.getElementById("redonda4").style.backgroundColor = "#1F7862";
	document.getElementById("progresoBarra").style.borderRadius = "50px";
	document.getElementById("contTipo3").style.display = "none";
	document.getElementById("contTipo4").style.display = "flex";
}

function botonSiguiente4() {
	document.getElementById("botonAnterior3").style.display = "none";
	document.getElementById("progresoBarra").style.display = "none";
	document.getElementById("botonSiguiente4").style.display = "none";
	document.getElementById("barraProgresoCita").style.display = "none";
	document.getElementById("progresoCita").style.display = "none";
	document.getElementById("contTipo4").style.display = "none";
	document.getElementById("contTipo5").style.display = "flex";
	timeout4 = setTimeout(startCita, 2500);
}

function startCita() {
	document.getElementById("textoProgreso4").style.color = "#dddddd";
	document.getElementById("textoProgreso4").style.color = "#dddddd";
	document.getElementById("textoProgreso3").style.color = "#dddddd";
	document.getElementById("redonda4").style.backgroundColor = "#dddddd";
	document.getElementById("redonda3").style.backgroundColor = "#dddddd";
	document.getElementById("progresoCita").style.display = "flex";
	document.getElementById("barraProgresoCita").style.display = "flex";
	document.getElementById("progresoBarra").style.display = "flex";
	document.getElementById("progresoBarra").style.width = "25%";
	document.getElementById("botonAnterior").style.display = "none";
	document.getElementById("botonSiguiente2").style.display = "none";
	document.getElementById("botonSiguiente").style.display = "flex";
	document.getElementById("textoProgreso2").style.color = "#dddddd";
	document.getElementById("redonda2").style.backgroundColor = "#dddddd";
	document.getElementById("contTipo").style.display = "flex";
	document.getElementById("contTipo5").style.display = "none";
}

// Anterior

function abrirAnterior() {
	document.getElementById("progresoBarra").style.width = "25%";
	document.getElementById("botonAnterior").style.display = "none";
	document.getElementById("botonSiguiente2").style.display = "none";
	document.getElementById("botonSiguiente").style.display = "flex";
	document.getElementById("textoProgreso2").style.color = "#dddddd";
	document.getElementById("redonda2").style.backgroundColor = "#dddddd";
	document.getElementById("contTipo").style.display = "flex";
	document.getElementById("contTipo2").style.display = "none";
}

function abrirAnterior2() {
	document.getElementById("progresoBarra").style.width = "50%";
	document.getElementById("botonAnterior").style.display = "flex";
	document.getElementById("botonAnterior2").style.display = "none";
	document.getElementById("botonSiguiente3").style.display = "none";
	document.getElementById("botonSiguiente2").style.display = "flex";
	document.getElementById("textoProgreso3").style.color = "#dddddd";
	document.getElementById("redonda3").style.backgroundColor = "#dddddd";
	document.getElementById("contTipo2").style.display = "flex";
	document.getElementById("contTipo3").style.display = "none";
}

function abrirAnterior3() {
	document.getElementById("progresoBarra").style.width = "75%";
	document.getElementById("botonAnterior2").style.display = "flex";
	document.getElementById("botonAnterior3").style.display = "none";
	document.getElementById("botonSiguiente4").style.display = "none";
	document.getElementById("botonSiguiente3").style.display = "none";
	document.getElementById("botonSiguiente2").style.display = "flex";
	document.getElementById("textoProgreso4").style.color = "#dddddd";
	document.getElementById("redonda4").style.backgroundColor = "#dddddd";
	document.getElementById("progresoBarra").style.borderRadius = "50px 0px 0px 50px";
	document.getElementById("contTipo3").style.display = "flex";
	document.getElementById("contTipo4").style.display = "none";
}

// Calendario PD: Ns que estoy haciendo

function numeroUno() {
	document.getElementById("numerosMes").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Lunes";
	document.getElementById("diaSemana").innerHTML = "1";
}

function numeroDos() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Martes";
	document.getElementById("diaSemana").innerHTML = "2";
}

function numeroTres() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Miércoles";
	document.getElementById("diaSemana").innerHTML = "3";
}

function numeroCuatro() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Jueves";
	document.getElementById("diaSemana").innerHTML = "4";
}

function numeroCinco() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Viernes";
	document.getElementById("diaSemana").innerHTML = "5";
}

function numeroSeis() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Sábado";
	document.getElementById("diaSemana").innerHTML = "6";
}

function numeroSiete() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Domingo";
	document.getElementById("diaSemana").innerHTML = "7";
}

function numeroOcho() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Lunes";
	document.getElementById("diaSemana").innerHTML = "8";
}

function numeroNueve() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Martes";
	document.getElementById("diaSemana").innerHTML = "9";
}

function numeroDiez() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Miércoles";
	document.getElementById("diaSemana").innerHTML = "10";
}

function numeroOnce() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Jueves";
	document.getElementById("diaSemana").innerHTML = "11";
}

function numeroDoce() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Viernes";
	document.getElementById("diaSemana").innerHTML = "12";
}

function numeroTrece() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Sábado";
	document.getElementById("diaSemana").innerHTML = "13";
}

function numeroCatorce() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Domingo";
	document.getElementById("diaSemana").innerHTML = "14";
}

function numeroQuince() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Lunes";
	document.getElementById("diaSemana").innerHTML = "15";
}

function numeroDieciseis() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Martes";
	document.getElementById("diaSemana").innerHTML = "16";
}

function numeroDiecisiete() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Miércoles";
	document.getElementById("diaSemana").innerHTML = "17";
}

function numeroDieciocho() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Jueves";
	document.getElementById("diaSemana").innerHTML = "18";
}

function numeroDiecinueve() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Viernes";
	document.getElementById("diaSemana").innerHTML = "19";
}

function numeroVeinte() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Sábado";
	document.getElementById("diaSemana").innerHTML = "20";
}

function numeroVeintiuno() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Domingo";
	document.getElementById("diaSemana").innerHTML = "21";
}

function numeroVeintidos() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Lunes";
	document.getElementById("diaSemana").innerHTML = "22";
}

function numeroVeintitres() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Martes";
	document.getElementById("diaSemana").innerHTML = "23";
}

function numeroVeinticuatro() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Miércoles";
	document.getElementById("diaSemana").innerHTML = "24";
}

function numeroVeinticinco() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Jueves";
	document.getElementById("diaSemana").innerHTML = "25";
}

function numeroVeintiseis() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Viernes";
	document.getElementById("diaSemana").innerHTML = "26";
}

function numeroVeintisiete() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Sábado";
	document.getElementById("diaSemana").innerHTML = "27";
}

function numeroVeintiocho() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Domingo";
	document.getElementById("diaSemana").innerHTML = "28";
}

function numeroVeintinueve() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Lunes";
	document.getElementById("diaSemana").innerHTML = "29";
}

function numeroTreinta() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#1F7862";
	document.getElementById("numerosMes31").style.backgroundColor = "#8a8a8a";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Martes";
	document.getElementById("diaSemana").innerHTML = "30";
}

function numeroTreintauno() {
	document.getElementById("numerosMes").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes2").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes3").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes4").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes5").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes6").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes7").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes8").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes9").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes10").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes11").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes12").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes13").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes14").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes15").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes16").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes17").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes18").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes19").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes20").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes21").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes22").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes23").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes24").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes25").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes26").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes27").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes28").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes29").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes30").style.backgroundColor = "#8a8a8a";
	document.getElementById("numerosMes31").style.backgroundColor = "#1F7862";
	document.getElementById("contDelDia").style.opacity = "1";
	document.getElementById("diaMes").style.opacity = "1";
	document.getElementById("lunesDomingo").innerHTML = "Miércoles";
	document.getElementById("diaSemana").innerHTML = "31";
}

function horaUno() {
	document.getElementById("horasDia").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horaDos() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horatres() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horaCuatro() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horaCinco() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horaSeis() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horaSiete() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horaOcho() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#1F7862";
	document.getElementById("horasDia9").style.backgroundColor = "#8a8a8a";
}

function horaNueve() {
	document.getElementById("horasDia").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia2").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia3").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia4").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia5").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia6").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia7").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia8").style.backgroundColor = "#8a8a8a";
	document.getElementById("horasDia9").style.backgroundColor = "#1F7862";
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