(function () {
	
	var historyList = [];
	
	function history ($page) {
		
		if ($page !== undefined) {
			historyList.push($page);
		} else if (historyList.length > 2) {
			historyList.pop();
		};
		
		document.querySelector("#pageTitle").textContent = "ngObs :: " + historyList.slice(-1)[0];
		
		document.querySelector("#buttonBack").disabled = (historyList.length > 2) ? false : true;
		document.querySelector("#buttonMenu").disabled = (historyList.length > 2) ? false : true;
	
		return historyList.slice(-1)[0];
	
	};
	
	function load ($page) {
		history($page);
		$.pages[$page].forward();
	};
	
	function back ($page) {
		var page = history();
		if (page === undefined) return;
		$.pages[page].back();
		if ($page !== undefined && $page !== page) back($page);
	};
	
	$.nav = {
		"load": load,
		"back": back
	};
	
}());
