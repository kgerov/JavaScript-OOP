var Container = (function () {
	var containerCount = 0;

	function Container (name) {
		Element.call(this, name);
		containerCount++;
		this._id = containerCount;
	}
	
	Container.extends(Element);

	Container.prototype.toHTML = function() {
		//Attributes
		var contID = document.createAttribute('id');
		var contClass = document.createAttribute('class');
		var contTitleClass = document.createAttribute('class');
		var contTitleText = document.createTextNode(this._name);
		var contContentClass = document.createAttribute('class');
		var inputType = document.createAttribute('type');
		var inputPlaceHolder = document.createAttribute('placeholder');
		var inputID = document.createAttribute('id');
		var buttonID = document.createAttribute('id');
		var buttonText = document.createTextNode("New Section");

		//Elements
		var cont = document.createElement('DIV');
		contID.value = 'container-' + this._id;
		contClass.value = 'container';
		cont.setAttributeNode(contClass);
		cont.setAttributeNode(contID);

		var contTitle = document.createElement('DIV');
		contTitleClass.value = 'container-title';
		contTitle.setAttributeNode(contTitleClass);
		contTitle.appendChild(contTitleText);

		var contContnet = document.createElement('DIV');
		contContentClass.value = 'container-content';
		contContnet.setAttributeNode(contContentClass);

		var addDiv = document.createElement('DIV');

		var input = document.createElement('INPUT');
		inputType.value = 'text';
		inputID.value = 'add-section-text-' + this._id;
		inputPlaceHolder.value = 'Title...';
		input.setAttributeNode(inputType);
		input.setAttributeNode(inputID);
		input.setAttributeNode(inputPlaceHolder);

		var button = document.createElement('BUTTON');
		buttonID.value = 'add-section-' + this._id;
		button.setAttributeNode(buttonID);
		button.appendChild(buttonText);
		var id = this._id;
		button.addEventListener("click", function () {
			var containerID = id;
			var sectionNameID = 'add-section-text-' + id;
			var sectionName = document.getElementById(sectionNameID).value;
			document.getElementById(sectionNameID).value = '';
			addSection(containerID, sectionName);
		}, false);

		//Append
		addDiv.appendChild(input);
		addDiv.appendChild(button);

		cont.appendChild(contTitle);
		cont.appendChild(contContnet);
		cont.appendChild(addDiv);

		return cont;
	};

	return Container;
})();