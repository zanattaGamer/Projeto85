//Criar uma referência para tela
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

//Dê altura e largura específicas para a imagem do carro
greencarwidth = 75;
greencarheight = 100;
greencar_x = 5;
greencar_y = 225;


backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.

function add() {
	//carregar carro e imagens de fundo na tela.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar;
	greencar_imgTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencarwidth, greencarheight);

}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (greencar_y >= 0) {
		greencar_y = greencar_y - 10;
		console.log("Subindo");
		uploadBackground();
		uploadGreenCar();
	}
	//Definir função para mover o carro para cima
}

function down() {
	if (greencar_y <= 350) {
		greencar_y = greencar_y + 10;
		console.log("Descendo");
		uploadBackground();
		uploadGreenCar();
	}
	//Definir função para mover o carro para baixo
}

function left() {
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 10;
		console.log("Para esquerda");
		uploadBackground();
		uploadGreenCar();
	}
	//Definir função para mover o carro para o lado esquerdo
}

function right() {
	if (greencar_x <= 750) {
		greencar_x = greencar_x + 10;
		console.log("Para direita");
		uploadBackground();
		uploadGreenCar();
	}
	//Definir função para mover o lado direito do carro
}
