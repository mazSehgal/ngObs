(function () {
	
	var historyList = [];
	
	function history ($page) {
		
		if ($page !== undefined) {
			historyList.push($page);
		} else if (historyList.length > 2) {
			historyList.pop();
			var rtn = historyList.slice(-1)[0];
		};
		
		document.querySelector("#buttonBack").style.visibility = (historyList.length > 2) ? "visible" : "hidden";
	
		return rtn;
	
	};
	
	function load ($page) {
		history($page);
		$.pages[$page].forward();
	};
	
	function back () {
		if (var page = history() === undefined) return;
		$.pages[page].back();
	};
	
	$.nav = {
		"load": load,
		"back": back
	};
	
}());
