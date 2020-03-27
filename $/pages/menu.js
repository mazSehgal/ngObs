(function () {
	
	function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	[
		"fluids",
		"fluids",
		"fluids",
	].forEach(function ($v) {
	
		var button = document.createElement("button");
		button.textContent = $v;
		button.onpointerdown = function () {
			alert($v);
		};
		main.appendChild(button);
		
	});
	
	$.pages.menu = {
		forward: forward,
		back: back
	};
	
}())
