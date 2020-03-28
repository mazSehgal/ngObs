$.pages["Search Results"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.textContent = "Search results...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
