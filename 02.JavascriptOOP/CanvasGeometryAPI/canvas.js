var Canvas = (function () {
	function Canvas(canvasId) {
		this._canvas = document.getElementById(canvasId);
		this._ctx = this._canvas.getContext('2d');
	}

	function addTraingle(traingle) {
		this._ctx.beginPath();
    	this._ctx.moveTo(traingle.getPoint().getX(),traingle.getPoint().getY());
	    this._ctx.lineTo(traingle.getPoint2().getX(),traingle.getPoint2().getY());
	    this._ctx.lineTo(traingle.getPoint3().getX(),traingle.getPoint3().getY());
	    this._ctx.fillStyle = traingle.getColor();
      	this._ctx.fill();
	}

	function addCircle(circle) {
		this._ctx.beginPath();
		this._ctx.arc(circle.getPoint().getX(),circle.getPoint().getY(),circle.getRadius(),0,2*Math.PI);
		this._ctx.fillStyle = circle.getColor();
      	this._ctx.fill();
	}

	function addRectangle (rect) {
		this._ctx.beginPath();
	    this._ctx.rect(rect.getPoint().getX(), rect.getPoint().getX(), 
	    	rect.getWidth(), rect.getHeight());
	    this._ctx.fillStyle = rect.getColor();
	    this._ctx.fill();
	}

	function addSegment (seg) {
		this._ctx.beginPath();
	    this._ctx.moveTo(seg.getPoint().getX(), seg.getPoint().getY());
	    this._ctx.lineTo(seg.getPoint2().getX(), seg.getPoint2().getY());
	    this._ctx.strokeStyle = seg.getColor();
	    this._ctx.stroke();
	}

	Canvas.prototype.Draw = function(shapes) {
		for (var i = 0; i < shapes.length; i++) {
			switch(shapes[i].getClassName()) {
				case "Triangle": addTraingle.call(this, shapes[i]); 
					break;
				case "Circle": addCircle.call(this, shapes[i]); 
					break;
				case "Rectangle": addRectangle.call(this, shapes[i]); 
					break;
				case "Segment": addSegment.call(this, shapes[i]); 
					break;
				default: throw new Error("Invalid Shape");
					break;
			}	
		}
	};

	return Canvas;
})();