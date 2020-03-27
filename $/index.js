(function () {

	[
		"pages/menu.js"
	].forEach(function ($v) {
	
		var script = document.createElement("script");
		script.src = "https://nigelgoss.github.io/$/" + $v;
		document.head.appendChild(script);
		
	});
	
}());
