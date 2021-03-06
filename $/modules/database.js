$.db = (function () {
	
	var timer;
	function query ($in, $ftn) {
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			
			if (xhr.readyState !== 4) return;
			clearTimeout(timer);
			if (document.body.contains(spinnerScreen) === true) spinnerScreen.parentNode.removeChild(spinnerScreen);
			
			if (xhr.status !== 200) return;
			$ftn(JSON.parse(xhr.responseText));
			
		};
		
		//xhr.open("POST", $.const.root + "!/api.php", true);
		//xhr.send(JSON.stringify($in));
		
		xhr.open("GET", $.const.root + "!/" + $in[0] + ".dat", true);
		xhr.send();
		
		timer = setTimeout(function () { document.body.appendChild(spinnerScreen); }, 500);
		
	};
	
	var spinnerScreen = document.createElement("div");
	spinnerScreen.style.position = "absolute";
	spinnerScreen.style.top = "0";
	spinnerScreen.style.left = "0";
	spinnerScreen.style.width = "100%";
	spinnerScreen.style.height = "100%";
	spinnerScreen.onpointerdown = function () {
		event.preventDefault();
	};
	
		var div = document.createElement("div"); spinnerScreen.appendChild(div);
		div.style.position = "absolute";
		div.style.top = "50%";
		div.style.left = "50%";
		div.style.transform = "translate(-50%,-50%)";
			
			var img = document.createElement("img"); div.appendChild(img);
			img.src = $.const.root + "$/resources/spinner.png";
			img.style.animation = "spin 1s linear infinite";
	
	return {
		"query": query,
	};

}());
