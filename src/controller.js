const drawPaddle = function(document, paddle) {
	let slider = document.getElementById("paddle_1");
	slider.style.height = paddle.height;
	slider.style.width = paddle.width;
	slider.style.bottom = paddle.bottom;
	slider.style.left = paddle.left;
};

const drawBall = function(document, ball) {
	let slider = document.getElementById("ball_1");
	slider.style.height = ball.height;
	slider.style.width = ball.width;
	slider.style.bottom = ball.bottom;
	slider.style.left = ball.left;
};

const initializePaddle = function(document, paddle) {
	let screen = document.getElementById("screen");
	let paddleDiv = document.createElement("div");
	paddleDiv.id = "paddle_1";
	paddleDiv.className = "paddle";
	screen.appendChild(paddleDiv);
	drawPaddle(document, paddle);
};

const initializeBall = function(document, ball) {
	let screen = document.getElementById("screen");
	let ballDiv = document.createElement("div");
	ballDiv.id = "ball_1";
	ballDiv.className = "ball";
	screen.appendChild(ballDiv);
	drawBall(document, ball);
};

const movePaddle = function(document, paddle) {
	if (event.key == "ArrowRight") paddle.moveRight();
	if (event.key == "ArrowLeft") paddle.moveLeft();
	drawPaddle(document, paddle);
};

const initializeGame = function() {
	let screen = document.getElementById("screen");
	let ball = new Ball(30, 30, 10, 70, 5);
	let paddle = new Paddle(8, 100, 40, 5, 5);
	initializePaddle(document, paddle);
	initializeBall(document, ball);
	screen.focus();
	screen.onkeydown = movePaddle.bind(null, document, paddle);
};
