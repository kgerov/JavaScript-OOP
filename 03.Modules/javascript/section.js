var Section = (function () {
	var sectionCount = 0;

	function Section (name) {
		Element.call(this, name);
		sectionCount++;
		this._id = sectionCount;
	}

	Section.extends(Element);

	Section.prototype.toHTML = function() {
		//Attributes for Section
		var sectionClass = document.createAttribute("class");
		sectionClass.value = "section";
		var sectionID = document.createAttribute("id");
		sectionID.value = "section-" + this._id;
		var sectionTitleClass = document.createAttribute("class");
		sectionTitleClass.value = "section-title";
		var sectionContentClass = document.createAttribute("class");
		sectionContentClass.value = "section-content";
		var inputType = document.createAttribute("type");
		var inputID = document.createAttribute('id');
		inputType.value = "text";
		inputID.value = 'add-item-text-' + this._id;
		var sectionNameInnerHTML = document.createTextNode(this._name);
		var buttonID = document.createAttribute("id");
		buttonID.value = "add-item" + this._id;
		var buttonPlus = document.createTextNode("+");

		//Elements
		var sectionDiv = document.createElement("DIV");
		sectionDiv.setAttributeNode(sectionClass);
		sectionDiv.setAttributeNode(sectionID);

		var innerSection = document.createElement("SECTION");
		var divTitle = document.createElement("DIV");
		divTitle.setAttributeNode(sectionTitleClass);
		divTitle.appendChild(sectionNameInnerHTML);
		var divContent = document.createElement("DIV");
		divContent.setAttributeNode(sectionContentClass);

		var innerSection2 = document.createElement("SECTION");
		var inputField = document.createElement("INPUT");
		inputField.setAttributeNode(inputType);
		inputField.setAttributeNode(inputID);
		var button = document.createElement("BUTTON");
		button.setAttributeNode(buttonID);
		button.appendChild(buttonPlus);
		var id = this._id;
		button.addEventListener("click", function () {
			var sectionID = id;
			var todotextID = inputID.value;
			var ToDoText = document.getElementById(todotextID).value;
			document.getElementById(todotextID).value = '';
			addItem(sectionID, ToDoText);
		}, false);

		//Append Elements
		innerSection2.appendChild(inputField);
		innerSection2.appendChild(button);

		innerSection.appendChild(divTitle);
		innerSection.appendChild(divContent);

		sectionDiv.appendChild(innerSection);
		sectionDiv.appendChild(innerSection2);

		return sectionDiv;
	};

	return Section;
})();