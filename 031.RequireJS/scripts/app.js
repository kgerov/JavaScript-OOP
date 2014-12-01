(function () {
	'use strict';

	require(['factory'], function (Factory) {
		function addItem (sectionID, ToDoText) {
			var query = "#section-" + sectionID + " section div:nth-child(2)";
			var parentDiv = document.querySelector(query);
			var newToDo = Factory.initItem(ToDoText);
			parentDiv.appendChild(newToDo.toHTML());
		}

		function addSection (containerID, sectionName) {
			var query = "#container-" + containerID + " .container-content";
			var parentDiv = document.querySelector(query);
			var newSection = Factory.initSection(sectionName);
			parentDiv.appendChild(newSection.toHTML());
		}

		document.getElementById('add-cont').addEventListener('click', function () {
			var main = document.querySelector('main');
			var contName = document.getElementById('add-cont-text').value;
			document.getElementById('add-cont-text').value = '';
			var cont = Factory.initContainer(contName);
			main.appendChild(cont.toHTML());
		}, false);
	});
}());