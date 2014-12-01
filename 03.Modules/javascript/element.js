var Element = (function () {
	function Element(name) {
		this._name = name;
		this._childNodes = [];
	}

	Element.prototype.addChild = function(child) {
		if (child == null || child == undefined) {
			throw new Error("Child is empty!");
		}

		if (child.getClassName() == this.getClassName()) {
			throw new Error("Child has to be under parent in hierarchy");
		}

		this._childNodes.push(child);
	};

	Element.prototype.getChildNodes = function() {
		return this._childNodes;
	};

	Element.prototype.toString = function() {
		return this.getClassName() + " | Name: " + this._name;
	};

	return Element;
})();