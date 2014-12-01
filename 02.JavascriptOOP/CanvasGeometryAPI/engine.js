var shapes = [];
var canvas = new Canvas("shapeCanvas");

function showOptions() {
	var e = document.getElementById("shape");
	var userInp = e.options[e.selectedIndex].value;

	var extras = [document.getElementById('ExtraPoints'), 
				document.getElementById('TriangleExtraPoints'),
				document.getElementById('CircleExtra'),
				document.getElementById('RectangleExtra')];
	
	for (var i = 0; i < extras.length; i++) {
		extras[i].style.display = "none";
	}

	switch(userInp) {
		case "1": extras[0].style.display="block";
				  extras[1].style.display="block";
			break;
		case "2": extras[2].style.display="block";
			break;
		case "3": extras[3].style.display="block";
			break;
		case "4": extras[0].style.display="block";
			break;
		default: throw new Error("Invalid Shape");
			break;
	}
}

function addFigure() {
	var e = document.getElementById("shape");
	var userInp = e.options[e.selectedIndex].value;

	var x1 = document.getElementById('x1').value;
	var y1 = document.getElementById('y1').value;
	var color = document.getElementById('colorSelct').value;

	switch(userInp) {
		case "1": addTriangle(x1, y1, color);
			break;
		case "2": addCircle(x1, y1, color);
			break;
		case "3": addRectangle(x1, y1, color);
			break;
		case "4": addSegment(x1, y1, color);
			break;
		default: throw new Error("Invalid Shape");
			break;
	}
}

function addTriangle(x1, y1, color) {
	var x2 = document.getElementById('x2').value;
	var y2 = document.getElementById('y2').value;
	var x3 = document.getElementById('x3').value;
	var y3 = document.getElementById('y3').value;

	var triangle = new Triangle(x1, y1, x2, y2, x3, y3, color);

	shapes.push(triangle);
	canvas.Draw(shapes);
	registerFigure(triangle);
}

function addCircle(x1, y1, color) {
	var radius = document.getElementById('radius').value;

	var circle = new Circle(x1, y1, color, radius);

	shapes.push(circle);
	canvas.Draw(shapes);
	registerFigure(circle);
}

function addRectangle (x1, y1, color) {
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;

	var rect = new Rectangle(x1, y1, color, width, height);

	shapes.push(rect);
	canvas.Draw(shapes);
	registerFigure(rect);
}

function addSegment (x1, y1, color) {
	var x2 = document.getElementById('x2').value;
	var y2 = document.getElementById('y2').value;

	var seg = new Segment(x1, y1, x2, y2, color);

	shapes.push(seg);
	canvas.Draw(shapes);
	registerFigure(seg);
}

function registerFigure (shape) {
	var reg = document.getElementById('data');
	var valueStr = "value"  + shapes.length;
	reg.options[reg.options.length] = new Option(shape.toString(), valueStr);
}

// function moveUp () {
// 	var select = document.getElementById('data');
// 	var shape = select.options[select.selectedIndex];

// 	if (select.selectedIndex > 0) {
// 		var upperShape = select.options[select.selectedIndex-1];
// 		var temp = upperShape.text;
// 		upperShape.text = shape.text;
// 		shape.text = temp;
// 		select.selectedIndex = selectedIndex - 1;
// 	}
// }

function deleteShape () {
	var select = document.getElementById('data');
	var value = select.options[select.selectedIndex].value;
	shapes.splice(value.charAt(value.length-1), 1);
 	select.remove(select.selectedIndex);
 	canvas.Draw(shapes);
}