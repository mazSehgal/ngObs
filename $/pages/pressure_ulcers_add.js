$.pages["Pressure Ulcers Add"] = (function () {

	function forward ($in, $cb) {
		back($cb);
	}
	
	function back ($cb) {
		document.querySelector("main").replaceWith(main);
		$cb();
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
				img.src = "data:image/png;base64," + store.image;
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
			
	var textarea = document.createElement("textarea");
	main.appendChild(textarea);

	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "Save";
	
	return {
		"forward": forward,
		"back": back,
	};
  
}());
