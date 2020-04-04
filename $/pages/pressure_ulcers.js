$.pages["Pressure Ulcers"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	var button = document.createElement("button");
	main.appendChild(button);
	button.textContent = "Snap";
	button.onpointerdown = function () {
		
		navigator.camera.getPicture(
			
			function cameraSuccess ($imageData) {
        			img.src = "data:image/png;base64," + $imageData;
			},
			
			function cameraError ($e) {},
			
			{
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL,
				sourceType: PictureSourceType.CAMERA,
				encodingType: Camera.EncodingType.PNG,
				mediaType: Camera.MediaType.PICTURE,
				allowEdit: true,
				correctOrientation: true
			}
		);
		
	};
	
	var img = document.createElement("img");
	main.appendChild(img);
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
