const getPaddle = document => document.getElementById("paddle_1");
const getBall = document => document.getElementById("ball_1");
const getScreen = document => document.getElementById("screen_1");
const getBrickClass = document => document.getElementsByClassName("brick");
const HIGHSCORE = 700;

const drawPaddle = function(document, paddle) {
	let slider = getPaddle(document);
	slider.style.height = paddle.height;
	slider.style.width = paddle.width;
	slider.style.bottom = paddle.bottom;
	slider.style.left = paddle.left;
};

const drawBall = function(document, ball) {
	let ball_1 = getBall(document);
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

const drawScreen = function(document, screen) {
	let screen_1 = getScreen(document);
	screen_1.style.height = screen.height;
	screen_1.style.width = screen.width;
};

const initializeScreen = function(document, screen) {
	let body = document.getElementsByTagName("body")[0];
	let mainDiv = document.createElement("div");
	mainDiv.id = "screen_1";
	mainDiv.className = "screen";
	mainDiv.tabIndex = "0";
	body.appendChild(mainDiv);
	drawScreen(document, screen);
	return mainDiv;
};

const initializePaddle = function(document, paddle) {
	let screen = getScreen(document);
	let paddleDiv = document.createElement("div");
	paddleDiv.id = "paddle_1";
	paddleDiv.className = "paddle";
	screen.appendChild(paddleDiv);
	drawPaddle(document, paddle);
};

const initializeBall = function(document, ball) {
	let screen = getScreen(document);
	let ballDiv = document.createElement("div");
	ballDiv.id = "ball_1";
	ballDiv.className = "ball";
	screen.appendChild(ballDiv);
	drawBall(document, ball);
};

const initializeBrick = function(document, brick, id) {
	let screen = getScreen(document);
	let brickDiv = document.createElement("div");
	brickDiv.className = "brick";
	brickDiv.id = id;
	screen.appendChild(brickDiv);
	drawBrick(brickDiv, brick);
};

const movePaddle = function(document, paddle, screen) {
	if (paddle.left - 10 < 0) {
		paddle.moveRight();
	}
	if (paddle.left > screen.width - (paddle.width + 10)) {
		console.log(screen.width);

		paddle.moveLeft();
	}
	if (event.key == "ArrowRight") paddle.moveRight();
	if (event.key == "ArrowLeft") paddle.moveLeft();
	drawPaddle(document, paddle);
};

const convertPositionToId = (positionX, positionY) => {
	return `${positionX}${positionY}`;
};

const bricks = function(height, width, bottom_brick, left_brick) {
	let bottom = bottom_brick;
	for (let numberOfLayers = 0; numberOfLayers < 7; numberOfLayers++) {
		let left = left_brick;
		for (let index = 0; index < 10; index++) {
			let brick = new Brick(height, width, bottom, left, true);
			left = left + 90;
			let id = convertPositionToId(numberOfLayers, index);
			initializeBrick(document, brick, id);
		}
		bottom = bottom - 40;
	}
};

const getPositions = function(brick) {
	return {
		id: brick.id,
		top: brick.offsetTop,
		left: brick.offsetLeft,
		height: brick.offsetHeight,
		width: brick.offsetWidth
	};
};

const getBrickPosition = function(document) {
	let bricks = getBrickClass(document);
	let positions = [];
	for (let index = 0; index < bricks.length; index++) {
		positions.push(getPositions(bricks[index]));
	}
	return positions;
};

let score = 0;

const detectCollision = function(document, ball, screen) {
	let brickPositions = getBrickPosition(document);
	for (let index = 0; index < brickPositions.length; index++) {
		if (
			ball.left + ball.radius * 2 >= brickPositions[index].left &&
			ball.left <= brickPositions[index].left + brickPositions[index].width &&
			ball.bottom ==
				screen.height - brickPositions[index].top - brickPositions[index].height
		) {
			const brickDiv = document.getElementById(brickPositions[index].id);
			brickDiv.parentNode.removeChild(brickDiv);
			score = score + 10;
		}
	}
};

const displayScore = function() {
	let scoreBoard = document.getElementById("score_board");
	scoreBoard.innerHTML = `<h2>Score : ${score}</h2>`;
};

const win = function() {
	if (score == HIGHSCORE) {
		document.write(`Congratulations.............!!! you won the game`);
	}
};

const gameOver = function() {
	document.write(`Your Score is ${score}\nPlease refresh page to play again`);
};

const changePositions = function(screen, paddle, ball) {
	let diameter = ball.radius * 2;
	let changes = { positionX: false, positionY: false };
	if (ball.left + diameter > screen.width) {
		changes.positionX = true;
	}
	if (ball.left < 0) {
		changes.positionX = true;
	}
	if (ball.bottom + diameter >= screen.height) {
		changes.positionY = true;
	}
	if (
		ball.bottom <= paddle.bottom + paddle.height &&
		ball.left < paddle.left + paddle.width + 8 &&
		ball.left > paddle.left
	) {
		changes.positionY = true;
	}
	if (ball.bottom < 0) {
		gameOver();
	}
	return changes;
};

const moveBall = function(screen, ball, paddle) {
	detectCollision(document, ball, screen);
	displayScore();
	win();
	let changes = changePositions(screen, paddle, ball);
	ball.applyChanges(changes);
	ball.move();
	drawBall(document, ball);
};

const initializeGame = function() {
	let screen = new Wall(600, 900);
	let ball = new Ball(15, 20, 200, 5, 10);
	let paddle = new Paddle(15, 100, 200, 10, 20);
	let newScreen = initializeScreen(document, screen);
	initializePaddle(document, paddle);
	initializeBall(document, ball);
	bricks(35, 80, 560, 8);
	let move = moveBall.bind(null, screen, ball, paddle);
	setInterval(move, 50);
	newScreen.focus();
	newScreen.onkeydown = movePaddle.bind(null, document, paddle, screen);
};

window.onload = initializeGame;
