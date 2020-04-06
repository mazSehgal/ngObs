$.await(["$.datagrid"], function () {
$.pages["Patient List"] =  (function () {

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	function forward ($in, $cb) {
		
		$.db.query(["patientList", {}], function ($d) {
			datagrid.data = $d;
			back($cb);
		});

	};

	function back ($cb) {
		document.querySelector("main").replaceWith(main);
		$cb();
	};

	var main = document.createElement("main");
	main.style.flex = "1 1 auto";
	main.style.display = "flex";
	main.style.flexDirection = "column";
	main.style.overflow = "auto";
	
	var datagrid = $.datagrid();
	main.appendChild(datagrid);
	datagrid.style.display = "grid";
	datagrid.style.gridGap = "3px";
	datagrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
	
	datagrid.ftn = function ($v) {
		
		var ele = document.createElement("div");
		ele.style.display = "flex";
		ele.style.border = "1px solid grey";
		ele.style.borderRadius = "10px";
		ele.style.padding = "10px";
		ele.style.backgroundColor = "white";
		ele.style.alignItems = "center";
		
		var div = document.createElement("div");
		ele.appendChild(div);
		div.style.flex = "1 1 auto";
		div.style.display = "flex";
			
			var div2 = document.createElement("div");
			div.appendChild(div2);
			div2.style.display = "1 1 auto";
			div2.style.display = "flex";
		
				var div3 = document.createElement("div");
				div2.appendChild(div3);
				div3.style.display = "1 1 auto";
				div3.textContent = $v.Surname + ", " + $v.Forename + " (" + $v.Title + ")";
		
				var div3 = document.createElement("div");
				div2.appendChild(div3);
				div3.style.display = "1 1 auto";
				div3.textContent = $v.Born;
		
			var div2 = document.createElement("div");
			div.appendChild(div2);
		
			[
				["Hospital No.", "HospitalNo"],
				["NHS No.", "NHSNo"],
				["Born", "Born"],
				["Bed", "Bed"]
			].forEach(function ($v2) {

				var div3 = document.createElement("div");
				div2.appendChild(div3);

					var div4 = document.createElement("div");
					div3.appendChild(div4);
					div4.textContent = $v2[0];

					var div4 = document.createElement("div");
					div3.appendChild(div4);
					div4.textContent = $v[$v2[1]];
				
			});
				
		var div = document.createElement("div");
		ele.appendChild(div);
		div.style.flex = "0 0 auto";
		
			var button = document.createElement("button");
			div.appendChild(button);
			button.style.borderRadius = "999px";
			button.textContent = ">";
			button.onpointerdown = function () {
				$.nav.load("Patient", {"EPN":$v.EPN});
			};
								
		return ele;
		
	};
  
	return {
		"forward": forward,
		"back": back,
	};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

}()); });
