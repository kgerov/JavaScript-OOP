function paramless() {
    console.log(arguments.length);
    for(key in arguments) {
    	console.log(arguments[key] + "->" + typeof(arguments[key]));
    }

  	console.log(this);  
}

paramless(4, "Gosho", true, 4.5);
console.log();
paramless("Krasi", 5.4, 5);

paramless.call({ name: "Geshkata" }, 5, "banica");
paramless.apply(null, ["Krava", true]);