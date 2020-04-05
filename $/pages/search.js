$.pages["Search"] = (function () {

	function forward ($in, $cb) {
		form.reset();
		back($cb);
	};
	
	function back ($cb) {
		document.querySelector("main").replaceWith(main);
		$cb();
	};
	
	var main = document.createElement("main");
	
	var form = document.createElement("form");
	main.appendChild(form);
	form.style.display = "grid";
	form.style.gridTemplateColumns = "auto auto";
	form.style.gridGap = "10px";
	
	var label = document.createElement("label");
	form.appendChild(label);
	label.textContent = "Patient No.";
	
	var input = document.createElement("input");
	form.appendChild(input);
	input.type = "text";
	
	var label = document.createElement("label");
	form.appendChild(label);
	label.textContent = "Patient Name";
	
	var input = document.createElement("input");
	form.appendChild(input);
	input.type = "text";
	
	var label = document.createElement("label");
	form.appendChild(label);
	label.textContent = "Date of Birth";
	
	var input = document.createElement("input");
	form.appendChild(input);
	input.type = "text";
	
	var label = document.createElement("label");
	form.appendChild(label);
	label.textContent = "Postcode";
	
	var input = document.createElement("input");
	form.appendChild(input);
	input.type = "text";
	
	var button = document.createElement("button");
	form.appendChild(button);
	button.textContent = "Clear";
	button.ngpointerdown = function () {
		form.reset();
	};
	
	var button = document.createElement("button");
	form.appendChild(button);
	button.textContent = "Go";
	button.ngpointerdown = function () {
		$.nav.load("Search Results", {});
	};
	
	return {
		"forward": forward,
		"back": back,
	};
  
}());
