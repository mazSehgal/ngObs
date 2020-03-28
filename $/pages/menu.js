$.pages["Menu"] = (function () {
	
	function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	main.style.flex = "1 1 auto";
	main.style.display = "flex";
	main.style.flexDirection = "column";

	var div = document.createElement("div");
	main.appendChild(div);
	div.style.flex = "1 1 auto";
	div.style.display = "flex";
	div.style.flexDirection = "column";
	
	[
		["Patient List", "ALD"],
		["Locations", "Locations"],
		["Search", "Search"],
		["Admin", "Admin"],
	].forEach(function ($v) {

		var button = document.createElement("button");
		button.textContent = $v[1];
		button.onpointerdown = function () {
			$.nav.load($v[0]);
		};
		div.appendChild(button);

	});

	var div = document.createElement("div");
	main.appendChild(div);
	div.style.flex = "0 0 auto";
	div.style.display = "flex";
	div.style.flexDirection = "column";
	
	var button = document.createElement("button");
	div.appendChild(button);
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
