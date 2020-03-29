(function () {

var interval = setInterval(function () {
	if ($.datagrid === undefined) return;
	clearInterval(interval);
	$.pages["Locations"] =  init();
}, 200);
	
function init () {	

	function forward () {
		back();
	};

	function back () {
		document.querySelector("main").replaceWith(main);
	};

	var main = document.createElement("main");
	main.style.flex = "1 1 auto";
	main.style.display = "flex";
	
	var datagrid = $.datagrid();
	main.appendChild(datagrid);
	datagrid.style.flex = "1 1 auto";
	datagrid.style.display = "grid";
	datagrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(400px, 1fr))";
	
	datagrid.data = [
		{"Code": "1", "Desc": "Ward 1"},
		{"Code": "2", "Desc": "Ward 2"},
		{"Code": "3", "Desc": "Ward 3"},
		{"Code": "4", "Desc": "Ward 4"},
	];
	datagrid.ftn = function ($v) {
		var button = document.createElement("button");
		button.textContent = $v.Desc;
		button.onpointerdown = function () {
			$.nav.load("Patient List", {"Location": $v.Code});
		};
		return button;
	};
  
	return {
		"forward": forward,
		"back": back,
	};
	
};
  
}());
