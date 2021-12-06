// Script geral
// Projeto final de Co-Design de Aplicativos
//
// Grupo 08:
// 
// - Breno Brolacci Schiavon
// - Jerônimo de Abreu Afrange
// - João Manoel Pasqua Filho
// - Luana de Matos Sorpreso

const ancoras = document.getElementsByTagName("a");

function liDown(evento) {

	const elemento = evento.target;
	const ancora = elemento.getElementsByTagName("a")[0];

	ancora.style.color = "#CF5E4A";
	elemento.style.color = "#CF5E4A";
	elemento.style.borderColor = "#CF5E4A";
}

function liUp(evento) {

	const elemento = evento.target;
	const ancora = elemento.getElementsByTagName("a")[0];

	ancora.style.color = "white";
	elemento.style.color = "#white";
	elemento.style.borderColor = "#428C99";

	document.location = ancora.href;
}

function aDown(evento) {

	const ancora = evento.target;
	const elemento = ancora.parentElement;

	ancora.style.color = "#CF5E4A";
	elemento.style.color = "#CF5E4A";
	elemento.style.borderColor = "#CF5E4A";
}

function aUp(evento) {

	const ancora = evento.target;
	const elemento = ancora.parentElement;

	ancora.style.color = "white";
	elemento.style.color = "#white";
	elemento.style.borderColor = "#428C99";
}

function aDownImg(evento) {

	const imagem = evento.target;
	var arquivo_imagem = imagem.src;
	arquivo_imagem = arquivo_imagem.slice(0, -4);
	arquivo_imagem += "_clicado.jpg";
	imagem.src = arquivo_imagem;
}

function aUpImg(evento) {

	const imagem = evento.target;
	var arquivo_imagem = imagem.src;
	arquivo_imagem = arquivo_imagem.slice(0, -12);
	arquivo_imagem += ".jpg";
	imagem.src = arquivo_imagem;
}

for (var i = 0; i < ancoras.length; i++) {

	const ancora = ancoras[i];
	const elemento = ancora.parentElement;

	if (elemento.nodeName == "HEADER") {
		ancora.addEventListener("mousedown", aDownImg, false);
		ancora.addEventListener("mouseup", aUpImg, false);

	} else {

		ancora.addEventListener("mousedown", aDown, false);
		ancora.addEventListener("mouseup", aUp, false);

		if (elemento.nodeName == "LI") {
			elemento.addEventListener("mousedown", liDown, false);
			elemento.addEventListener("mouseup", liUp, false);
		}

		else if (elemento.nodeName == "H3") {
			elemento.addEventListener("mousedown", liDown, false);
			elemento.addEventListener("mouseup", liUp, false);
		}
	}
}

function inputDown(evento) {
	const elemento = evento.target;
	elemento.style.color = "#CF5E4A";
	elemento.style.borderColor = "#CF5E4A";
}

function inputUp(evento) {
	const elemento = evento.target;
	elemento.style.color = "#white";
	elemento.style.borderColor = "#428C99";
}

function feedbackResumoSalvo(evento) {
	const certinho = document.getElementsByClassName("certinho")[0];
	certinho.style.visibility = "inherit";
}

const inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {

	inputs[i].addEventListener("mousedown", inputDown, false);
	inputs[i].addEventListener("mouseup", inputUp, false);

	if (inputs[i].id == "enviar-resumo") {
		inputs[i].addEventListener("mouseup", feedbackResumoSalvo, false);
	}
}

const elementos_para_esconder = document.getElementsByClassName("linha-escondida");
const cursos = document.getElementById("lista-cursos");

for (var i = 0; i < elementos_para_esconder.length; i++) {
	elementos_para_esconder[i].style.visibility = 'hidden';
}

function updateSeletor() {

	const input_curso = document.getElementsByClassName("seletor-curso")[0];

	if (input_curso.value == "placeholder") {
		for (var i = 0; i < elementos_para_esconder.length; i++) {
			elementos_para_esconder[i].style.visibility = 'hidden';
		}
	}

	else {
		for (var i = 0; i < elementos_para_esconder.length; i++) {
			elementos_para_esconder[i].style.visibility = 'inherit';
		}
	}
}







