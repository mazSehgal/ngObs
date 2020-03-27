(function () {

	document.body.style.fontFamily = "Arial";
	document.body.style.backgroundColor = "lightgrey";
	document.body.style.margin = "0";
	document.body.style.height = "100%";
	document.body.style.display = "flex";
	document.body.style.flexDirection = "column";
	
	var header = document.createElement("header");
	document.body.appendChild(header);
	header.style.flex = "0 0 auto";
	header.style.display = "flex";

		var div = document.createElement("div");
		div.textContent = "A";
		header.appendChild(div);

		var div = document.createElement("div");
		div.textContent = "A";
		header.appendChild(div);

		var div = document.createElement("div");
		div.textContent = "A";
		header.appendChild(div);

		var div = document.createElement("div");
		div.textContent = "A";
		header.appendChild(div);

		var div = document.createElement("div");
		div.textContent = "A";
		header.appendChild(div);
	
	var main = document.createElement("main");
	document.body.appendChild(main);
	
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
	
	if (window.navigator.standalone == false) {
		alert("Apps work best when launched from the home screen");
	};
	
}());
