(function () {
	
	var history = [];
	
	function load ($page) {
		history.push($page);
		$.pages[$page].forward();
	};
	
	function back () {
		if (history.length <= 2) return;
		history.pop();
		$.pages[history.slice(-1)[0]].back();
	};
	
	$.nav = {
		"load": load,
		"back": back
	};
	
}());
