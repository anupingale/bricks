const drawPaddle = function(document, paddle) {
	let slider = document.getElementById("paddle_1");
	slider.style.height = paddle.height;
	slider.style.width = paddle.width;
	slider.style.bottom = paddle.bottom;
	slider.style.left = paddle.left;
};

const initializePaddle = function(document, paddle) {
	let screen = document.getElementById("screen");
	let paddleDiv = document.createElement("div");
	paddleDiv.id = "paddle_1";
	paddleDiv.className = "paddle";
	screen.appendChild(paddleDiv);
	drawPaddle(document, paddle);
};

const movePaddle = function(document, paddle) {
	if (event.key == "ArrowRight") paddle.moveRight();
	if (event.key == "ArrowLeft") paddle.moveLeft();
	drawPaddle(document, paddle);
};

const initialize = function() {
	let screen = document.getElementById("screen");
	let paddle = new Paddle(8, 100, 40, 5, 5);
	initializePaddle(document, paddle);
	screen.onkeydown = movePaddle.bind(null, document, paddle);
};
