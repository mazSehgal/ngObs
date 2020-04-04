$.await(["$.datagrid"], function () {
$.pages["Locations"] =  (function () {

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	
	function forward ($in, $cb) {
		
		$.db.query(["locations", {}], function ($d) {
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
		ele.style.display = "grid";
		ele.style.gridGap = "5px";
		ele.style.gridTemplateColumns = "1fr 1fr auto";
		ele.style.alignItems = "center";
		ele.style.border = "1px solid grey";
		ele.style.borderRadius = "10px";
		ele.style.padding = "10px";
		ele.style.backgroundColor = "white";
		
			var strong = document.createElement("strong");
			ele.appendChild(strong);
			strong.style.gridColumn = "span 2";
			strong.textContent = $v.Desc;
		
			var button = document.createElement("button");
			ele.appendChild(button);
			button.style.borderRadius = "999px";
			button.style.gridRow = "span 2";
			button.textContent = ">";
			button.onpointerdown = function () {
				$.nav.load("Patient List", {"Location": $v.Code});
			};

			var div = document.createElement("div");
			ele.appendChild(div);
			div.style.whiteSpace = "nowrap";
			div.style.color = "grey";
			div.style.fontSize = "0.7em";

				var em = document.createElement("em");
				div.appendChild(em);
				em.textContent = "Code ";
						
				div.appendChild(document.createTextNode($v.Code));

			var div = document.createElement("div");
			ele.appendChild(div);
			div.style.whiteSpace = "nowrap";
			div.style.color = "grey";
			div.style.fontSize = "0.7em";

				var em = document.createElement("em");
				div.appendChild(em);
				em.textContent = "Site ";
						
				div.appendChild(document.createTextNode($v.Site));
					
		return ele;
		
	};
  
	return {
		"forward": forward,
		"back": back,
	};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

}()); });
