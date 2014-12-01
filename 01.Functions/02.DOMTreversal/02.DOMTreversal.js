function traverse(selector) {
	var node = document.querySelector(selector);
	if (node !== null && node !== undefined) {
		traverseDom(node, "");
	}

	function traverseDom(node, space) {
		console.log(space + node.nodeName.toLowerCase() + ": " + 
			(node.id ? "id=\"" + node.id + "\" " : "") + 
			(node.className ? "class=\"" + node.className + "\" " : ""));
		
		for (var i = 0; i < node.childNodes.length; i++) {
			var currNode = node.childNodes[i];
			if (currNode.hasChildNodes()) {
				traverseDom(currNode, space + "    ");
			}
		}
	}
}	

var selector = ".birds";
traverse(selector);
