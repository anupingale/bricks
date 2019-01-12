class Paddle {
	constructor(height, width, left, bottom, speed) {
		this.height = height;
		this.width = width;
		this.bottom = bottom;
		this.left = left;
		this.speed = speed;
	}
	moveRight() {
		this.left = this.left + this.speed;
	}
	moveLeft() {
		this.left = this.left - this.speed;
	}
}
