$.pages["Patient List"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	[
		["1", "Patient 1"],
		["2", "Patient 2"],
		["3", "Patient 3"],
		["4", "Patient 4"],
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
