$.pages["Patient List"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.textContent = "Patient list...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
