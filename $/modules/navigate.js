(function () {
	
	var historyList = [];
	
	function history ($page) {
		
		var rtn = null;
		
		if ($page !== undefined) {
			historyList.push($page);
		} else if (historyList.length > 2) {
			historyList.pop();
			rtn = historyList.slice(-1)[0];
		};
		
		document.querySelector("#buttonBack").style.visibility = (historyList.length > 2) ? "visible" : "hidden";
		document.querySelector("#buttonSignOut").style.visibility = (historyList.length > 1) ? "visible" : "hidden";
	
		return rtn;
	
	};
	
	function load ($page) {
		history($page);
		$.pages[$page].forward();
	};
	
	function back () {
		var page = history();
		if (page === null) return;
		$.pages[page].back();
	};
	
	$.nav = {
		"load": load,
		"back": back
	};
	
}());
