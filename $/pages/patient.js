$.await(["$.datagrid"], function () {
$.pages["Patient"] =  (function () {

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

	function forward ($in, $cb) {
		
		$.db.query(["patient", {}], function ($d) {
			datagrid.data = $d;
			back($cb);
		});

	};

	function back ($cb) {
		$.patientBanner.show();
		document.querySelector("main").replaceWith(main);
		$cb();
	};

	var main = document.createElement("main");
	main.style.flex = "1 1 auto";
	main.style.display = "flex";
	main.style.flexDirection = "column";
	main.style.overflow = "auto";
	
	var ele = document.createElement("div");
	main.appendChild(ele);
	ele.style.flex = "0 0 auto";
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
		strong.textContent = "Patient Summary";

		var button = document.createElement("button");
		ele.appendChild(button);
		button.style.gridRow = "span 2";			
		button.style.borderRadius = "999px";
		button.textContent = ">";
		button.onpointerdown = function () {
			$.nav.load($v.Type, {"EPN": 1200856});
		};

		var em = document.createElement("em");
		ele.appendChild(em);
		em.style.fontSize = "0.7em";
		em.style.borderBottom = "1px solid grey";
		em.textContent = "Please complete full NEWS2 and pain scores hourly";

	var datagrid = $.datagrid();
	main.appendChild(datagrid);
	datagrid.style.flex = "1 1 auto";
	datagrid.style.display = "grid";
	datagrid.style.gridGap = "3px";
	datagrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(350px, 1fr))";
	
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
			strong.textContent = $v.Type;
		
			var button = document.createElement("button");
			ele.appendChild(button);
			button.style.gridRow = "span 2";
			button.style.borderRadius = "999px";
			button.textContent = ">";
			button.onpointerdown = function () {
				$.nav.load($v.Type, {"EPN": 1200856});
			};
		
			var em = document.createElement("em");
			ele.appendChild(em);
			em.style.gridColumn = "span 2";
			em.style.fontSize = "0.7em";
			em.style.borderBottom = "1px solid grey";
			em.textContent = $v.Desc;

			var div = document.createElement("div");
			ele.appendChild(div);
			div.style.color = "grey";
			div.style.fontSize = "0.7em";
			div.textContent = $v.Date;
		
			var div = document.createElement("div");
			ele.appendChild(div);
			div.style.gridColumn = "span 2";
			div.style.color = "grey";
			div.style.fontSize = "0.7em";
			div.textContent = $v.Summary;
							
		return ele;
		
	};
  
	return {
		"forward": forward,
		"back": back,
	};
	
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

}()); });
