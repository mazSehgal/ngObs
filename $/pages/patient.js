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
			$.nav.load($v[0], {"Patient": "1"});
		};

	});
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
