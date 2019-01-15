class Game {
	constructor() {
		this.screen = new Wall(600, 900);
		this.ball = new Ball(15, 20, 200, 5, 10);
		this.paddle = new Paddle(15, 100, 200, 10, 20);
	}
}
