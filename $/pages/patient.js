(function () {

var interval = setInterval(function () {
	if ($.datagrid === undefined) return;
	clearInterval(interval);
	$.pages["Patient"] =  init();
}, 200);
	
function init () {	

	function forward ($in) {
		
		$.db.query(["patient", {}], function ($d) {
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
	datagrid.style.gridGap = "3px";
	datagrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(500px, 1fr))";
	
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
				//$.nav.load("Patient List", {"Location": $v.Code});
			};
		
			var em = document.createElement("em");
			ele.appendChild(strong);
			em.style.gridColumn = "span 2";
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
	
};
  
}());
