setTimeout(function () {
	document.querySelector("#user").value = "test";
	document.querySelector("#pass").value = "test";
}, 1000);

(function () {
	
	var link = document.createElement("link");
	document.head.appendChild(link);
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = $.const.root + "$/resources/main.css";   
	
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

		var button = document.createElement("button");
		header.appendChild(button);
		button.id = "buttonBack";
		button.textContent = "<";
		button.style.visibility = "hidden";
		button.onpointerdown = function () {
			$.nav.back();
		};
	
		var div = document.createElement("div");
		div.textContent = "A";
		header.appendChild(div);

		var div = document.createElement("div");
		div.textContent = "A";
		header.appendChild(div);

		onbeforeunload = function () { return "Are you sure?"; };
		var button = document.createElement("button");
		header.appendChild(button);
		button.id = "buttonSignOut";
		button.style.visibility = "hidden";
		button.textContent = "Sign Out";
		button.onpointerdown = function () {
			onbeforeunload = null;
			location.reload(true);
		};
	
		var button = document.createElement("button");
		header.appendChild(button);
		button.textContent = "?";
		button.onpointerdown = function () {
			alert("Help");
		};
	
	var main = document.createElement("main");
	document.body.appendChild(main);
	
	$.pages = {};
	
	var loadList = [
		"$/modules/navigate.js",
		"$/modules/database.js",
		"$/pages/menu.js",
		"$/pages/sign_in.js",
		"$/pages/fluids.js",
	];
	
	var counter = loadList.length;
	loadList.forEach(function ($v) {
	
		var script = document.createElement("script");
		script.src = $.const.root + $v;
		script.onerror = script.onload;
		script.onload = function () {
			if (--counter > 0) return;
			$.nav.load("Sign In");
		};
		document.head.appendChild(script);
		
	});
	
	if (window.navigator.standalone == false) {
		alert("Apps work best when launched from the home screen");
	};
	
}());
