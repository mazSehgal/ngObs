$.db = (function () {

	function delay ($ms) {
		return new Promise(function (res) { setTimeout(res, $ms); });
	};
	
	async function query ($in, $ftn) {
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status !== 200) return;
			await delay(1000);
			$ftn(xhr.responseText);
		};
		xhr.open("GET", $.const.root + "!/" + $in[0] + ".dat", true);
		xhr.send();
		
	};
	
	return {
		"query": query,
	};

}());
