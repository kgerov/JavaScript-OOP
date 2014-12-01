function addItem (sectionID, ToDoText) {
	var query = "#section-" + sectionID + " section div:nth-child(2)";
	var parentDiv = document.querySelector(query);
	var newToDo = new Item(ToDoText, false);
	parentDiv.appendChild(newToDo.toHTML());
}

function addSection (containerID, sectionName) {
	var query = "#container-" + containerID + " .container-content";
	var parentDiv = document.querySelector(query);
	var newSection = new Section(sectionName);
	parentDiv.appendChild(newSection.toHTML());
}

document.getElementById('add-cont').addEventListener('click', function () {
	var main = document.querySelector('main');
	var contName = document.getElementById('add-cont-text').value;
	document.getElementById('add-cont-text').value = '';
	var cont = new Container(contName);
	main.appendChild(cont.toHTML());
}, false);