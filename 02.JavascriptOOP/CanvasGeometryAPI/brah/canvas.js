var Canvas = (function () {
    function Canvas(canvasId, shapes) {
        this._canvas = document.getElementById(canvasId);
        this._ctx = this._canvas.getContext("2d");
        this._shapes = shapes;
    }

    function drawCircle(circle) {
        var x = circle.getPoint().getX(),
            y = circle.getPoint().getY(),
            radius = circle.getRadius(),
            color = circle.getColor();

        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this._ctx.fill();
    };

    function drawPoint(point) {
        var x = point.getPoint().getX(),
            y = point.getPoint().getY(),
            radius = 5,
            color = point.getColor();

        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this._ctx.fill();
    };

    function drawRectangle(rectangle) {
        var x = rectangle.getPoint().getX(),
            y = rectangle.getPoint().getY(),
            width = rectangle.getWidth(),
            height = rectangle.getHeight(),
            color = rectangle.getColor();

        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.rect(x, y, width, height);
        this._ctx.fill();
    }

    function drawSegment(segment) {
        var color = segment.getColor();
        var point1 = segment.getPoint();
        var point2 = segment.getPoint2();

        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.moveTo(point1.getX(), point1.getY());
        this._ctx.lineTo(point2.getX(), point2.getY());
        this._ctx.stroke();
    }

    function drawTriangle(triangle) {
        var color = triangle.getColor();
        var point1 = triangle.getPoint();
        var point2 = triangle.getPoint2();
        var point3 = triangle.getPoint3();
        
        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.moveTo(point1.getX(), point1.getY());
        this._ctx.lineTo(point2.getX(), point2.getY());
        this._ctx.lineTo(point3.getX(), point3.getY());
        this._ctx.fill();
    }

    Canvas.prototype.update = function () {
        var i, shape;

        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        for (i = 0; i < this._shapes.length; i++) {
            shape = this._shapes[i];
            if (shape instanceof Circle) {
                drawCircle.call(this, shape);
            }

            if (shape instanceof Point) {
                drawPoint.call(this, shape);
            }

            if (shape instanceof Rectangle) {
                drawRectangle.call(this, shape);
            }

            if (shape instanceof Segment) {
                drawSegment.call(this, shape);
            }

            if (shape instanceof Triangle) {
                drawTriangle.call(this, shape);
            }
        }
    };

    return Canvas;
})();