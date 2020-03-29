$.pages["Patient"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	[
		["Fluids", "Fluid Balance"],
	].forEach(function ($v) {

		var button = document.createElement("button");
		main.appendChild(button);
		button.textContent = $v[1];
		button.onpointerdown = function () {
			$.nav.load("Patient", {"Patient": $v[0]});
		};

	});
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
