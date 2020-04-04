$.pages["Pressure Ulcers View"] = (function () {

	function forward () {
		
		$.db.query(["pressureUlcersView", {}], function ($d) {
			store = $d[0];
			build();
			back();
		});
		
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var store = {};
	
	function build () {
		img.src = "data:image/png;base64," + store.Image;
		div.textContent = store.Comment;
	};
	
	var main = document.createElement("main");
	
	var img = document.createElement("img");
	main.appendChild(img);
	
	var div = document.createElement("div");
	main.appendChild(div);
	
	return {
		"forward": forward,
		"back": back,
	};
  
}());
