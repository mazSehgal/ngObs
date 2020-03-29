$.pages["Locations"] = (function () {

  function forward () {
		back();
	};
	
	function back () {
		document.querySelector("main").replaceWith(main);
	};
	
	var main = document.createElement("main");
	
	var datagrid = $.datagrid();
	main.appenedChild(datagrid);
	datagrid.data = [
		{"Code": "1", "Desc": "Ward 1"},
		{"Code": "2", "Desc": "Ward 2"},
		{"Code": "3", "Desc": "Ward 3"},
		{"Code": "4", "Desc": "Ward 4"},
	];
	datagrind.ftn = function ($v) {
		var button = document.createElement("button");
		main.appendChild(button);
		button.textContent = $v.Desc;
		button.onpointerdown = function () {
			$.nav.load("Patient List", {"Location": $v.Code});
		};
	};
  
	return {
		"forward": forward,
		"back": back,
	};
  
}());
