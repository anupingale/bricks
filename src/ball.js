class Ball {
	constructor(height, width, bottom, left, speed) {
		this.height = height;
		this.width = width;
		this.bottom = bottom;
		this.left = left;
		this.speed = speed;
	}

	move(screen) {
		if (this.left > screen.width - this.width) {
			this.speed = -this.speed;
		}
		if (this.bottom < 0) {
			this.speed = -this.speed;
		}
		this.left = this.left + this.speed;
		this.bottom = this.bottom + this.speed;
	}
}
