(function () {
	
	document.body.textContent = "";
	
	["fluids"].forEach(function ($v) {
	
		var button = document.createElement("button");
		button.textContent = $v;
		button.onpointerdown = function () {
			alert($v);
		};
		document.body.appendChild(button);
		
	});
	
}())
