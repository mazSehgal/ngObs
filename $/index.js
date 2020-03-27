(function () {

	$.pages = {};
	
	var loadList = [
		"modules/navigate.js",
		"pages/menu.js",
	];
	
	var counter = loadList.length;
	loadList.forEach(function ($v) {
	
		var script = document.createElement("script");
		script.src = $.const.root + "$/" + $v;
		script.onerror = script.onload;
		script.onload = function () {
			if (--counter > 0) return;
			
			$.nav.load("menu");
			
		};
		document.head.appendChild(script);
		
	});
	
}());
