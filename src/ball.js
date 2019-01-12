class Ball {
	constructor(radius, bottom, left, dx, dy) {
		this.radius = radius;
		this.bottom = bottom;
		this.left = left;
		this.dx = dx;
		this.dy = dy;
	}

	move(screen, padddle) {
		if (this.left > screen.width - this.radius * 2) {
			this.dx = -this.dx;
		}
		if (this.bottom < padddle.bottom) {
			this.dy = -this.dy;
		}
		if (this.bottom > screen.height - this.radius * 2) {
			this.dy = -this.dy;
		}
		if (this.left < 0) {
			this.dx = -this.dx;
		}
		this.left = this.left + this.dx;
		this.bottom = this.bottom + this.dy;
	}
}
