$.pages["Menu"] = (function () {
	
	function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.style.display = "flex";
	main.style.flexDirection = "column";
	
	[
		["Fluids Chart", "Fluids"],
		["Fluids", "Fluids"],
		["Fluids", "Fluids"],
	].forEach(function ($v) {
	
		var button = document.createElement("button");
		button.textContent = $v[0];
		button.style.flex = "1 0 50px";
		button.style.margin = "1px";
		button.style.padding = "10px";
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
