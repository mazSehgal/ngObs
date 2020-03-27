(function () {

	function load ($page) {
		$.pages[$page].forward();
	};
	
	$.nav = {
		"load": load
	};
	
}());
