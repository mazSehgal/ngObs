$.pages["Patient"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.textContent = "Patient...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
