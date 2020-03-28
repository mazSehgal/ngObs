$.pages["Admin"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.textContent = "Admin...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
