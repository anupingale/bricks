class Ball {
	constructor(radius, bottom, left, positionX, positionY) {
		this.radius = radius;
		this.bottom = bottom;
		this.left = left;
		this.positionX = positionX;
		this.positionY = positionY;
	}

	move(screen, paddle) {
		if (this.left > screen.width) {
			this.positionX = -this.positionX;
		}
		if (this.left < 0) {
			this.positionX = -this.positionX;
		}
		if (this.bottom > screen.height) {
			this.positionY = -this.positionY;
		}
		if (
			this.bottom <= paddle.bottom + paddle.height &&
			this.left < paddle.left + paddle.width &&
			this.left > paddle.left
		) {
			this.positionY = -this.positionY;
		}
		if (this.bottom < 0) {
			return 0;
		}
		this.left = this.left + this.positionX;
		this.bottom = this.bottom + this.positionY;
	}
}
