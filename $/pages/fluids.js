$.pages["Fluids"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.textContent = "Fluids...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
