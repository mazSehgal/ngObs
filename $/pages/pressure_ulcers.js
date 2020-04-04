$.pages["Pressure Ulcers"] = (function () {

	function forward () {
		
		$.db.query(["pressureUlcers", {}], function ($d) {
			store.images = $d;
			build();
			back();
		});
		
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var store = {};
	
	var main = document.createElement("main");
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "+";
	button.ngpointerdown = function () {
		$.nav.load("Pressure Ulcers Add", {});
	};
	
	function build () {
		
		gallery.textContent = "";
		store.images.forEach(function ($v) {
			
			var div = document.createElement("div");
			gallery.appendChild(div);
			div.style.border = "1px solid grey";
			
			var img = document.createElement("img");
			div.appendChild(img);
			img.style.maxWidth = "150px";
			img.style.maxHeight = "150px";
			img.src = "data:image/png;base64," + $v.Image;
			
			var button = document.createElement("button");
			div.appendChild(button);
			button.textContent = ">";
			button.ngpointerdown = function () {
			
			};
			
		});
	
	}; 
	
	var gallery = document.createElement("div");
	main.appendChild(gallery);
	
	return {
		"forward": forward,
		"back": back,
	};
  
}());
