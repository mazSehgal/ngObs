$.db = (function () {

	function delay ($ms) {
		return new Promise(function (res) { setTimeout(res, $ms); });
	};
	
	async function query () {
		await delay(1000);
		return {"A":1, "B":2, "C":3};
	};
	
	return {
		"query": query,
	};

}());
