$.pages["Search"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = $v[1];
	button.onpointerdown = function () {
		$.nav.load("Search Results");
	};
	
	return {
		"forward": forward,
		"back": back,
	};
  
}());
