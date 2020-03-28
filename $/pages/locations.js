$.pages["Locations"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.textContent = "Locations...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
