	
$.patientBanner = (function () {
	
	var store = {};
	
	var patientBanner = document.querySelector("#patientBanner");
	header.style.backgroundColor = "lightblue";
	header.textContent = "Patient Banner";
	
	function showBanner ($show) {
		patientBanner.style.display = ($show === true) ? "flex" : "none";
	};
	
	function build ($in) {
		patientBanner.textContent = $in;
	};
	
	Object.defineProperties(patientBanner, {
		
		"data": {
			"get": function () { return store; },
			"set": function ($in) { store = $in; build(); }
		}
		
	});
	
	patientBanner.show = function () { showBanner(true); };
	patientBanner.hide = function () { showBanner(false); };
	
	return patientBanner;
	
}());
