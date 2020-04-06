$.pages["Patient Summary Add"] = (function () {

	function forward ($in, $cb) {
		back($cb);
	};
	
	function back ($cb) {
		document.querySelector("main").replaceWith(main);
		$cb();
	};
	
	var main = document.createElement("main");
	
	var textarea = document.createElement("textarea");
	main.appendChild(textarea);
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "Save";
	button.ngpointerdown = function () {
		$.nav.back();
	};
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
