const drawPaddle = function(document, paddle) {
	let slider = document.getElementById("paddle_1");
	slider.style.height = paddle.height;
	slider.style.width = paddle.width;
	slider.style.bottom = paddle.bottom;
	slider.style.left = paddle.left;
};

const drawBall = function(document, ball) {
	let ball_1 = document.getElementById("ball_1");
	ball_1.style.height = ball.radius * 2;
	ball_1.style.width = ball.radius * 2;
	ball_1.style.bottom = ball.bottom;
	ball_1.style.left = ball.left;
};

const drawBrick = function(brickDiv, brick) {
	brickDiv.style.height = brick.height;
	brickDiv.style.width = brick.width;
	brickDiv.style.bottom = brick.bottom;
	brickDiv.style.left = brick.left;
};

const initializeScreen = function(document, screen) {
	let body = document.getElementsByTagName("body")[0];
	let mainDiv = document.createElement("div");
	mainDiv.id = "screen_1";
	mainDiv.className = "screen";
	mainDiv.tabIndex = "0";
	body.appendChild(mainDiv);
	return mainDiv;
};

const initializePaddle = function(document, paddle) {
	let screen = document.getElementById("screen_1");
	let paddleDiv = document.createElement("div");
	paddleDiv.id = "paddle_1";
	paddleDiv.className = "paddle";
	screen.appendChild(paddleDiv);
	drawPaddle(document, paddle);
};

const initializeBall = function(document, ball) {
	let screen = document.getElementById("screen_1");
	let ballDiv = document.createElement("div");
	ballDiv.id = "ball_1";
	ballDiv.className = "ball";
	screen.appendChild(ballDiv);
	drawBall(document, ball);
};

const initializeBrick = function(document, brick) {
	let screen = document.getElementById("screen_1");
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

const bricks = function(height, width, bottom_brick, left_brick) {
	let bottom = bottom_brick;
	for (let numberOfLayers = 0; numberOfLayers < 5; numberOfLayers++) {
		let left = left_brick;
		for (let index = 0; index < 10; index++) {
			let brick = new Brick(height, width, bottom, left, true);
			left = left + 90;
			initializeBrick(document, brick);
		}
		bottom = bottom - 40;
	}
};

const moveBall = function(screen, ball, paddle) {
	ball.move(screen, paddle);
	drawBall(document, ball);
};

const initializeGame = function() {
	let screen = new Screen(600, 905);
	let ball = new Ball(15, 10, 200, 10, 10);
	let paddle = new Paddle(8, 100, 200, 10, 20);
	let newScreen = initializeScreen(document, screen);
	initializePaddle(document, paddle);
	initializeBall(document, ball);
	bricks(30, 80, 560, 8);
	let move = moveBall.bind(null, screen, ball, paddle);
	setInterval(move, 100);
	newScreen.focus();
	newScreen.onkeydown = movePaddle.bind(null, document, paddle);
};
