(function () {

	<body style="font-family:Arial; background-color:lightgrey; margin:0; height:100%; display:flex; flex-direction:column;">
	
		<div style="width:0; height:0; overflow:hidden;">
			<input type="text" id="user" />
			<input type="password" id="pass" />
		</div>
		
		<header style="flex:0 0 auto; display:flex;"></header>
		
		<main style="flex:1 1 auto; display:flex;"></main>
		
	</body>
	
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
	
	var header = document.querySelector("header");
	
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
	
}());
