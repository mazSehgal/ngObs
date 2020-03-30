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
		ele.style.display = "flex";
		ele.style.justifyContent = "space-between";
		ele.style.alignItems = "center";
		ele.style.border = "1px solid grey";
		ele.style.borderRadius = "10px";
		ele.style.margin = "5px";
		ele.style.padding = "5px";
		ele.style.backgroundColor = "white";
		
			var div = document.createElement("div");
			ele.appendChild(div);
			div.style.flex = "1 1 auto";
			div.style.display = "flex";
			div.style.flexDirection = "column";
		
				var strong = document.createElement("strong");
				div.appendChild(strong);
				strong.style.textContent = $v.Desc;
		
				var span = document.createElement("span");
				div.appendChild(span);
		
					var em = document.createElement("em");
					span.appendChild(em);
					em.style.textContent = "Code: " + $v.Code;

					var em = document.createElement("em");
					span.appendChild(em);
					em.style.textContent = "Site: " + $v.Site;
		
			var button = document.createElement("button");
			ele.appendChild(button);
			button.style.flex = "0 0 auto";
			button.textContent = ">";
			button.onpointerdown = function () {
				$.nav.load("Patient List", {"Location": $v.Code});
			};
		
		return ele;
		
	};
  
	return {
		"forward": forward,
		"back": back,
	};
	
};
  
}());
