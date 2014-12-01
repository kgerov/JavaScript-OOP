var domModule = function() {
	function  appendChild(child, selector) {
		if (child == null) {
			return false;
		}

		var node = document.querySelector(selector);
		node.appendChild(child);
	};

	function removeChild(nodeSelector, childSelector) {
		var node = document.querySelector(nodeSelector);
		var child = node.querySelector(childSelector);

		if (child == null) {
			return false;
		}

		node.removeChild(child);
	};

	function addHandler(selector, eventType, evendHandler) {
		var nodes = document.querySelectorAll(selector);

		if (nodes == null) {
			return false;
		}
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].addEventListener(eventType, evendHandler);
		}
	};

	function retrieveElements(selector){
		var nodes = document.querySelectorAll(selector);

		if (nodes == null) {
			return false;
		}

		return nodes;
	};

	return {
		appendChild: appendChild,
		removeChild: removeChild,
		addHandler: addHandler,
		retrieveElements: retrieveElements
	};
}();

var liElement = document.createElement("li");

domModule.appendChild(liElement,".birds-list"); 
domModule.removeChild("ul.birds-list","li:first-child"); 
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });
var elements = domModule.retrieveElements(".bird");
console.log(elements);