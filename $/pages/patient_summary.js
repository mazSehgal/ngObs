$.pages["Patient Summary"] = (function () {

	function forward ($in, $cb) {
		
		$.db.query(["patientSummary", {}], function ($d) {
			back($cb);
		});
		
	};
	
	function back ($cb) {
		document.querySelector("main").replaceWith(main);
		$cb();
	};
	
	var main = document.createElement("main");
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "+";
	button.ngpointerdown = function () {
		$.nav.load("Patient Summary Add", {});
	};
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
