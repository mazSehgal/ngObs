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
		["Fluids", "Fluid Balance Chart"],
	].forEach(function ($v) {
	
		var button = document.createElement("button");
		button.textContent = $v[1];
		button.style.flex = "1 0 50px";
		button.style.margin = "1px";
		button.style.padding = "10px";
		button.onpointerdown = function () {
			$.nav.load($v[0]);
		};
		main.appendChild(button);
		
	});
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "Sign Out";
	button.onpointerdown = function () {
		onbeforeunload = null;
		location.reload(true);
	};
	
	return {
		"forward": forward,
		"back": back,
	};
	
}())
