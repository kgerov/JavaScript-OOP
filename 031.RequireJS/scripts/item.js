define(function () {

	var Item = (function () {
		var counter = 0;

		function Item (name, status) {
			this._name = name;
			this._status = status;
			counter++;
			this._id = counter;
		}

		Item.prototype.toggleStatus = function() {
			if (this._status == true) {
				this._status = false;
			} else {
				this._status = true;
			}
		};

		Item.prototype.getName = function() {
			return this._name;
		};

		Item.prototype.getStatus = function() {
			return this._status;
		};

		Item.prototype.toHTML = function() {
			var id = document.createAttribute('id');
			var id2 = document.createAttribute('id');
			var id3 = document.createAttribute('id');
			var classU = document.createAttribute('class');
			var inputType = document.createAttribute('type');
			var innerText = document.createTextNode(this._name);


			var todo = document.createElement("DIV");
			id.value = "todo-item-" + counter;
			todo.setAttributeNode(id);

			var check = document.createElement("INPUT");
			id2.value = "check-" + counter;
			inputType.value = "checkbox";
			check.setAttributeNode(id2);
			check.setAttributeNode(inputType);
			var id = counter;
			check.addEventListener('click', function () {
				var textID = 'text-' + id;	
				var text = document.getElementById(textID);

				if (!this.checked) {
					text.style.backgroundColor="transparent";
				} else {
					text.style.backgroundColor="#55e21d";
				}
			}, false);

			var text = document.createElement("DIV");
			id3.value = "text-" + counter;
			classU.value = "underline-todo";
			text.setAttributeNode(id3);
			text.setAttributeNode(classU);
			text.appendChild(innerText);
			
			todo.appendChild(check);
			todo.appendChild(text);

			return todo;
		};

		Item.prototype.toString = function() {
			return "Item: " + this._name + "|Completed: " + 
				this._status ? "Yes" : "No";
		};

		return Item;
	})();

	return Item;
});