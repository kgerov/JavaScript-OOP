var specialConsole =  function () {
	function writeLine() {
		if (arguments.length > 1) {
			console.log(replacePlaceholders.apply(this, arguments));
		} else {
			console.log(arguments[0]);
		}
	};

	function writeError() {
		if (arguments.length > 1) {
			console.error(replacePlaceholders.apply(this, arguments));
		} else {
			console.error(arguments[0]);
		}
	};

	function writeWarning() {
		if (arguments.length > 1) {
			console.warn(replacePlaceholders.apply(this, arguments));
		} else {
			console.warn(arguments[0]);
		}
	};

	function replacePlaceholders() {
		var replaceCount = 1;
		var string = arguments[0];

		for (var i = 0; i < string.length; i++) {
			if (string[i] == "{" && 
			   (string.charCodeAt(i+1) > 47 && string.charCodeAt(i+1) < 58) && 
			   string[i+2] == "}") {

				var placeholder = string.substring(i, i+3);
				string = string.replace(placeholder, arguments[replaceCount].toString());
				replaceCount++;
			}
		}

		return string;
	};

	return {
		writeLine: writeLine,
		writeError: writeError,
		writeWarning: writeWarning
	};
}();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0} {1}", "hello", "Pesho");
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");