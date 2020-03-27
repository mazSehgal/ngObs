$.db = (function () {

	function delay ($ms) {
		return new Promise(function (res) { setTimeout(res, $ms); });
	};
	
	async function query ($in, $ftn) {
		
		await delay(1000);
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status !== 200) return;
			$ftn(xhr.responseText);
		};
		xhr.open("POST", $.const.root + "!/" + $in[0] + ".txt", true);
		xhr.send(JSON.stringify($in));
		
	};
	
	return {
		"query": query,
	};

}());
