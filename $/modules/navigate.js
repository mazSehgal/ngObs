$.nav = (function () {
	
	var historyList = [];
	
	function update () {
		document.querySelector("#pageTitle").textContent = "ngObs :: " + historyList.slice(-1)[0];	
		document.querySelector("#buttonBack").disabled = (historyList.length > 2) ? false : true;
		document.querySelector("#buttonMenu").disabled = (historyList.length > 2) ? false : true;
	};
	
	function load ($page, $input) {
		$.pages[$page].forward($input, function () { historyList.push($page); update(); });
	};
	
	function back ($page) {
		if (historyList.length < 3) return;
		historyList.pop();
		$.pages[historyList.slice(-1)[0]].back(function () { update(); });
		if ($page !== undefined && $page !== historyList.slice(-1)[0]) back($page);
	};
	
	return {
		"load": load,
		"back": back,
	};
	
}());
