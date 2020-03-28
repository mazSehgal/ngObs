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
		
		document.querySelector("#pageTitle").textContent = "ngObs :: " + rtn;
		
		document.querySelector("#buttonBack").disabled = (historyList.length > 2) ? false : true;
		document.querySelector("#buttonMenu").disabled = (historyList.length > 2) ? false : true;
	
		return rtn;
	
	};
	
	function load ($page) {
		history($page);
		$.pages[$page].forward();
	};
	
	function back ($page) {
		var page = history();
		if (page === null) return;
		$.pages[page].back();
		if ($page !== undefined && historyList.slice(-1)[0] !== $page) back($page);
	};
	
	$.nav = {
		"load": load,
		"back": back
	};
	
}());
