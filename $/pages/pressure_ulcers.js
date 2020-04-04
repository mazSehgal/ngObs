$.pages["Pressure Ulcers"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.textContent = "PU...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
