setTimeout(function () {
	document.querySelector("#user").value = "test";
	//document.querySelector("#pass").value = "test";
}, 1000);

(function () {
	
	onbeforeunload = function () {
		return "Are you sure?";
	};
	
	// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	var tempDisable = false;
	new MutationObserver(function ($mutationsList) {
		$mutationsList.forEach(function ($x) {
			$x.addedNodes.forEach(function ($y) {
				$y.querySelectorAll("button").forEach(function ($z) {
					if (typeof $z.ngpointerdown === "undefined") return;
					$z.onpointerdown = function ($in) {
						event.preventDefault();
						if ($z.disabled === true || tempDisable === true) return;
						tempDisable = true;
						setTimeout(function () { tempDisable = false; }, 667);
						$z.ngpointerdown($in);
					};
				});
			});
		});
	}).observe(document.body, { attributes:true, childList:true });
	
	// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	var link = document.createElement("link");
	document.head.appendChild(link);
	link.href = $.const.root + "$/resources/splash.png";
	link.as = "image";
	link.rel = "preload";
	
	var link = document.createElement("link");
	document.head.appendChild(link);
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = $.const.root + "$/resources/main.css";   
	
	document.body.style.fontFamily = "Arial";
	document.body.style.backgroundColor = "lightgrey";
	document.body.style.margin = "0";
	document.body.style.height = "100%";
	document.body.style.display = "flex";
	document.body.style.flexDirection = "column";
	
	var header = document.createElement("header");
	document.body.appendChild(header);
	header.style.flex = "0 0 auto";
	header.style.backgroundColor = "#005EB8";
	header.style.color = "#FFFFFF";
	header.style.borderBottom = "3px solid #EEEEEE";
	header.style.display = "flex";

		var button = document.createElement("button");
		header.appendChild(button);
		button.id = "buttonBack";
		button.textContent = "<";
		button.style.flex = "0 0 auto";
		button.disabled = true;
		button.ngpointerdown = function () {
			$.nav.back();
		};
		
		var div = document.createElement("div");
		header.appendChild(div);
		div.style.flex = "1 1 auto";
		div.style.display = "flex";
		div.style.alignItems = "center";
		div.style.justifyContent = "center";

			var span = document.createElement("span");
			div.appendChild(span);
			span.id = "pageTitle";
			
		var button = document.createElement("button");
		header.appendChild(button);
		button.textContent = "?";
		button.style.flex = "0 0 auto";
		button.ngpointerdown = function () {
			alert("Help");
		};
	
		var button = document.createElement("button");
		header.appendChild(button);
		button.id = "buttonMenu";
		button.style.flex = "0 0 auto";
		button.disabled = true;
		button.textContent = "=";
		button.ngpointerdown = function () {
			$.nav.back("Menu");
		};
	
	var header = document.createElement("header");
	document.body.appendChild(header);
	header.id = "patientBanner";
	header.style.flex = "0 0 auto";
	header.style.display = "none";
	
	var main = document.createElement("main");
	document.body.appendChild(main);
	
	$.await = function ($arr, $cb) {
		var counter = 0;
		var interval = setInterval(function () {
			var pass = true;
			$arr.forEach(function ($v) {
				if (typeof eval($v) === "undefined") pass = false;
			});
			if (++counter < 100 && pass === false) return;
			if (counter === 100) console.error("Await waited too long...");
			clearInterval(interval);
			$cb();
		}, 100);
	};
	
	$.pages = {};
	
	var loadList = [
		"$/modules/navigate.js",
		"$/modules/database.js",
		"$/modules/datagrid.js",
		"$/modules/patient_banner.js",
		"$/pages/menu.js",
		"$/pages/sign_in.js",
		"$/pages/fluids.js",
		"$/pages/patient.js",
		"$/pages/patient_list.js",
		"$/pages/locations.js",
		"$/pages/search.js",
		"$/pages/search_results.js",
		"$/pages/admin.js",
		"$/pages/news2.js",
		"$/pages/sepsis_tool.js",
		"$/pages/abbey_pain_tool.js",
		"$/pages/ed_emergency_triage.js",
		"$/pages/pain_assessment.js",
		"$/pages/symptom_observations.js",
	];
	
	var counter = loadList.length;
	loadList.forEach(function ($v) {
	
		var script = document.createElement("script");
		document.head.appendChild(script);
		script.src = $.const.root + $v;
		script.onerror = script.onload;
		script.onload = function () {
			if (--counter > 0) return;
			$.nav.load("Sign In");
		};
		
	});

}());
