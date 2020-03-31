	
$.patientBanner = (function () {
	
	var store = {};
	
	var patientBanner = document.querySelector("#patientBanner");
	patientBanner.style.backgroundColor = "lightblue";
	patientBanner.textContent = "Patient Banner";
	
	function showBanner ($show) {
		patientBanner.style.display = ($show === true) ? "flex" : "none";
	};
	
	function build () {
		patientBanner.textContent = store;
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
