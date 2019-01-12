class Ball {
	constructor(radius, bottom, left, positionX, positionY) {
		this.radius = radius;
		this.bottom = bottom;
		this.left = left;
		this.positionX = positionX;
		this.positionY = positionY;
	}

	move(screen, padddle) {
		if (this.left + 15 + this.radius * 2 > screen.width) {
			this.positionX = -this.positionX;
		}
		if (this.bottom < padddle.bottom) {
			this.positionY = -this.positionY;
		}
		if (this.bottom + this.radius * 2 > screen.height) {
			this.positionY = -this.positionY;
		}
		if (this.left - this.radius < 0) {
			this.positionX = -this.positionX;
		}
		this.left = this.left + this.positionX;
		this.bottom = this.bottom + this.positionY;
	}
}
