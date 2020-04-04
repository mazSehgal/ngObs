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
			
			function success ($imageData) {
        			img.src = "data:image/png;base64," + $imageData;
			},
			
			function failure ($e) {},
			
			{
				quality: 95,
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
	img.style.width = "100%";
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
