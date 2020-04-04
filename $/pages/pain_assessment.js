$.pages["Pain Assessment"] = (function () {

	function forward ($in, $cb) {
		back($cb);
	};
	
	function back ($cb) {
		document.querySelector("main").replaceWith(main);
		$cb();
	};
	
	var main = document.createElement("main");
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "Go";
	button.onpointerdown = function () {
		//$.nav.load("Search Results");
	};
	
	return {
		"forward": forward,
		"back": back,
	};

}());
