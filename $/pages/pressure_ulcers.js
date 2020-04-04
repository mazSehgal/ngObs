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
	button.textContent = "Snap";
	button.ngpointerdown = function () {
		
		navigator.camera.getPicture(
			
			function success ($imageData) {
        			store.images.push($imageData);
				build();
			},
			
			function failure ($e) {},
			
			{
				quality: 100,
				destinationType: Camera.DestinationType.DATA_URL,
				sourceType: Camera.PictureSourceType.CAMERA,
				encodingType: Camera.EncodingType.PNG,
				mediaType: Camera.MediaType.PICTURE,
				allowEdit: false,
				correctOrientation: true
			}
		);
		
	};
	
	function build () {
		
		gallery.textContent = "";
		store.images.forEach(function ($v) {
			
			var div = document.createElement("div");
			gallery.appendChild(div);
			
			var img = document.createElement("img");
			div.appendChild(img);
			img.style.maxWidth = "150px";
			img.style.maxHeight = "150px";
			img.src = "data:image/png;base64," + $v;
			
			var button = document.createElement("button");
			div.appendChild(button);
			button.textContent = ">";
			button.ngpointerdown = function () {
				var main2 = document.createElement("main");
				main2.ngpointerdown = function () { document.querySelector("main").replaceWith(main); };
				var img = document.createElement("img");
				main2.appendChild(img);
				img.src = "data:image/png;base64," + $v;
				document.querySelector("main").replaceWith(main2);
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
