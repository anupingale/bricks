const drawPaddle = function(document, paddle) {
	let slider = document.getElementById("paddle_1");
	slider.style.height = paddle.height;
	slider.style.width = paddle.width;
	slider.style.bottom = paddle.bottom;
	slider.style.left = paddle.left;
};

const drawBall = function(document, ball) {
	let ball_1 = document.getElementById("ball_1");
	ball_1.style.height = ball.height;
	ball_1.style.width = ball.width;
	ball_1.style.bottom = ball.bottom;
	ball_1.style.left = ball.left;
};

const drawBrick = function(brickDiv, brick) {
	brickDiv.style.height = brick.height;
	brickDiv.style.width = brick.width;
	brickDiv.style.bottom = brick.bottom;
	brickDiv.style.left = brick.left;
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

const initializeBrick = function(document, brick) {
	let screen = document.getElementById("screen");
	let brickDiv = document.createElement("div");
	brickDiv.className = "brick";
	screen.appendChild(brickDiv);
	drawBrick(brickDiv, brick);
};

const movePaddle = function(document, paddle) {
	if (event.key == "ArrowRight") paddle.moveRight();
	if (event.key == "ArrowLeft") paddle.moveLeft();
	drawPaddle(document, paddle);
};

const bricks = function(height, width, bottom, left) {
	let bottom_ball = bottom;
	for (let numberOfLayers = 1; numberOfLayers < 6; numberOfLayers++) {
		let left_ball = left;
		for (let index = 1; index < 11; index++) {
			let brick = new Brick(height, width, bottom_ball, left_ball, true);
			left_ball = left_ball + 90;
			initializeBrick(document, brick);
		}
		bottom_ball = bottom_ball - 40;
	}
};

const moveBall = function(ball) {
	ball.move();
	drawBall(document, ball);
};

const initializeGame = function() {
	let screen = document.getElementById("screen");
	let ball = new Ball(30, 30, 10, 70, 5);
	let paddle = new Paddle(8, 100, 40, 5, 5);
	initializePaddle(document, paddle);
	initializeBall(document, ball);
	bricks(30, 80, 560, 8);
	let move = moveBall.bind(null, ball);
	setInterval(move, 1000);
	screen.focus();
	screen.onkeydown = movePaddle.bind(null, document, paddle);
};
