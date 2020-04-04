(function () {
	
	var historyList = [];
	
	var last;
	setInterval(function () {
		if (last === historyList.slice(-1)[0]) return;
		last = historyList.slice(-1)[0];
		document.querySelector("#pageTitle").textContent = "ngObs :: " + historyList.slice(-1)[0];	
		document.querySelector("#buttonBack").disabled = (historyList.length > 2) ? false : true;
		document.querySelector("#buttonMenu").disabled = (historyList.length > 2) ? false : true;
	}, 333);
	
	function load ($page, $in) {
		historyList.push($page);
		$.pages[$page].forward($in);
	};
	
	function back ($page) {
		if (historyList.length < 3) return;
		historyList.pop();
		$.pages[historyList.pop()].back();
		if ($page !== undefined && $page !== historyList.slice(-1)[0]) back($page);
	};
	
	$.nav = {
		"load": load,
		"back": back,
	};
	
}());
