$.pages["Locations"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	[
		["1", "Ward 1"],
		["2", "Ward 2"],
		["3", "Ward 3"],
		["4", "Ward 4"],
	].forEach(function ($v) {

		var button = document.createElement("button");
		main.appendChild(button);
		button.textContent = $v[1];
		button.onpointerdown = function () {
			$.nav.load("Patient List", {"Location": $v[0]});
		};

	});
  
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
