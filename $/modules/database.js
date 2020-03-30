$.db = (function () {

	function delay ($ms) {
		return new Promise(function (res) { setTimeout(res, $ms); });
	};
	
	async function query ($in, $ftn) {
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status !== 200) return;
			$ftn(JSON.parse(xhr.responseText));
		};
		
		//xhr.open("POST", $.const.root + "!/api.php", true);
		//xhr.send(JSON.stringify($in));
		
		xhr.open("GET", $.const.root + "!/" + $in[0] + ".dat", true);
		await delay(1000);
		xhr.send();
		
	};
	
	return {
		"query": query,
	};

}());
