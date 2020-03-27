$.pages["Menu"] = (function () {
	
	function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	[
		["Fluids Chart", "Fluids"],
		["Fluids", "Fluids"],
		["Fluids", "Fluids"],
	].forEach(function ($v) {
	
		var button = document.createElement("button");
		button.textContent = $v[0];
		button.onpointerdown = function () {
			$.nav.load($v[1]);
		};
		main.appendChild(button);
		
	});
	
	return {
		"forward": forward,
		"back": back,
	};
	
}())
