$.pages["Pressure Ulcers Add"] = (function () {

	function forward () {
		back();
	}
	
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
        		store.image = $imageData;
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
	
	var img = document.createElement("img");
	main.appendChild(img);
	img.style.maxWidth = "300px";
	img.style.maxHeight = "300px";
			
	function build () {
		img.src = "data:image/png;base64," + store.image;
	}; 
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "Save";
	
	return {
		"forward": forward,
		"back": back,
	};
  
}());
