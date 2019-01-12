class Ball {
	constructor(height, width, bottom, left, speed) {
		this.height = height;
		this.width = width;
		this.bottom = bottom;
		this.left = left;
		this.speed = speed;
	}
	move() {
		this.left = this.left + 10;
		this.bottom = this.bottom + 10;
	}
}
