(function () {

	$.pages = {};
	
	[
		"pages/menu.js"
	].forEach(function ($v) {
	
		var script = document.createElement("script");
		script.src = $.const.root + "$/" + $v;
		document.head.appendChild(script);
		
	});
	
}());
