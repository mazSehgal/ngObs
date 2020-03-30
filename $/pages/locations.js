(function () {

var interval = setInterval(function () {
	if ($.datagrid === undefined) return;
	clearInterval(interval);
	$.pages["Locations"] =  init();
}, 200);
	
function init () {	

	function forward () {
		
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
			div.textContent = $v.Desc;
		
			var button = document.createElement("button");
			ele.appendChild(button);
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
