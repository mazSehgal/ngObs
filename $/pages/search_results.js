$.pages["Search Results"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "Go";
	button.onpointerdown = function () {
		$.nav.load("Patient");
	};
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
