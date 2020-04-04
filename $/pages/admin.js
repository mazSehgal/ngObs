$.pages["Admin"] = (function () {

  function forward ($in, $cb) {
		back($cb);
	};
	
	function back ($cb) {
		document.querySelector("main").replaceWith(main);
		$cb();
	};
	
	var main = document.createElement("main");
	main.textContent = "Admin...";
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
