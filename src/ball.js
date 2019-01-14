class Ball {
	constructor(radius, bottom, left, positionX, positionY) {
		this.radius = radius;
		this.bottom = bottom;
		this.left = left;
		this.positionX = positionX;
		this.positionY = positionY;
	}

	applyChanges(changes) {
		if (changes.positionX == true) {
			this.positionX = -this.positionX;
		}
		if (changes.positionY == true) {
			this.positionY = -this.positionY;
		}
	}

	move() {
		this.left = this.left + this.positionX;
		this.bottom = this.bottom + this.positionY;
	}
}
