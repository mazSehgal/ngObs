(function () {

var interval = setInterval(function () {
	if ($.datagrid === undefined) return;
	clearInterval(interval);
	$.pages["Locations"] =  init();
}, 200);
	
function init () {	

	function forward ($in) {
		
		$.db.query(["locations", {}], function ($d) {
			datagrid.data = $d;
			back();
		});

	};

	function back () {
		document.querySelector("main").replaceWith(main);
	};

	var main = document.createElement("main");
	main.style.flex = "1 1 auto";
	main.style.display = "flex";
	main.style.flexDirection = "column";
	main.style.overflow = "auto";
	
	var datagrid = $.datagrid();
	main.appendChild(datagrid);
	datagrid.style.display = "grid";
	datagrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
	
	datagrid.ftn = function ($v) {
		
		var ele = document.createElement("div");
		ele.style.display = "grid";
		ele.style.gridTemplateColumns = "1fr 1fr auto";
		ele.style.border = "1px solid grey";
		ele.style.borderRadius = "10px";
		ele.style.margin = "2px";
		ele.style.padding = "5px";
		ele.style.backgroundColor = "white";
		
			var strong = document.createElement("strong");
			ele.appendChild(strong);
			strong.style.gridColumn = "span 2";
			strong.textContent = $v.Desc;
		
			var button = document.createElement("button");
			ele.appendChild(button);
			button.style.gridRow = "span 2";
			button.textContent = ">";
			button.onpointerdown = function () {
				$.nav.load("Patient List", {"Location": $v.Code});
			};

			var div = document.createElement("div");
			ele.appendChild(div);
			div.style.color = "grey";
			div.style.fontSize = "0.7em";

				var em = document.createElement("em");
				div.appendChild(em);
				em.textContent = "Code ";
						
				div.appendChild(document.createTextNode($v.Code));

			var div = document.createElement("div");
			ele.appendChild(div);
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
	
};
  
}());
