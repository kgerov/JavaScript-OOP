"use strict";

Object.prototype.getClassName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};

Object.prototype.extends = function (parent) {
  if (!Object.create) {
    Object.prototype.create = function (proto) {
      function F() {};
      F.prototype = proto;
      return new F();
    };
  };
  
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}

var Point = function() {
	function Point(x, y) {
		this._x = x;
		this._y = y;
	}

	Point.prototype.getX = function() {
		return this._x;
	};

	Point.prototype.getY = function() {
		return this._y;
	};
		
	Point.prototype.toString = function() {
		return ("(" + this._x + "," + this._y + ")");
	};

	return Point;
}();

var Shape = function() {
	function Shape(x, y, color) {
		this._point1 = new Point(x, y);
		this._colorHex = color;
	}

	Shape.prototype.getPoint = function() {
		return this._point1;
	};

	Shape.prototype.getColor = function() {
		return this._colorHex;
	};

	Shape.prototype.toString = function() {
		return this.getClassName() + "| Color: " + this._colorHex + "; Point1: " + this._point1.toString();
	};

	return Shape;
}();

var Circle = function() {
	function Circle(x, y, color, radius) {
		Shape.call(this, x, y, color);
		this._radius = radius;
	}

	Circle.extends(Shape);

	Circle.prototype.getRadius = function() {
		return this._radius;
	};

	Circle.prototype.toString = function () {
        var result = Shape.prototype.toString.call(this) + "; Radius: " + this._radius;
        return result;
    };

	return Circle;
}();

var Rectangle = function () {
	function Rectangle(x, y, color, width, height) {
		Shape.call(this, x, y, color);
		this._width = width;
		this._height = height;
	}

	Rectangle.extends(Shape);

	Rectangle.prototype.getWidth = function() {
		return this._width;
	};

	Rectangle.prototype.getHeight = function() {
		return this._height;
	};

	Rectangle.prototype.toString = function () {
        var result = Shape.prototype.toString.call(this) + "; Width: " + this._width + "; Height: " + this._height;
        return result;
    };

	return Rectangle;
}();

var Triangle = function() {
	function Triangle(x1, y1, x2, y2, x3, y3, color) {
		Shape.call(this, x1, y1, color);
		this._point2 = new Point(x2, y2);
		this._point3 = new Point(x3, y3);
	}

	Triangle.extends(Shape);

	Triangle.prototype.getPoint2 = function() {
		return this._point2;
	};

	Triangle.prototype.getPoint3 = function() {
		return this._point3;
	};

	Triangle.prototype.toString = function () {
        var result = Shape.prototype.toString.call(this) + "; Point2: " + this._point2 + "; Point3: " + this._point3;
        return result;
    };

	return Triangle;
}();

var Segment = function() {
	function Segment(x1, y1, x2, y2, color) {
		Shape.call(this, x1, y1, color);
		this._point2 = new Point(x2, y2);
	}

	Segment.extends(Shape);

	Segment.prototype.getPoint2 = function() {
		return this._point2;
	};

	Segment.prototype.toString = function () {
        var result = Shape.prototype.toString.call(this) + "; Point2: " + this._point2;
        return result;
    };

	return Segment;
}();

// var some = new Shape(44, 5, "#241354");
// console.log(some.toString());

// var someCircle = new Circle(12, 4, "#412434", 1);
// console.log(someCircle.toString());

// var tria = new Triangle(4, 5, 1, 2, 45, 23, "#234234");
// console.log(tria.toString());

// var rect = new Rectangle(1, 0, "#2423423", 10, 6);
// console.log(rect.toString());

// var seg = new Segment(2, 4, 1, 0, "#234234");
// console.log(seg.toString());