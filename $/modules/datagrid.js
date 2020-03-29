$.datagrid = (function () {

var store = {
	"ftn": null,
	"data": null
};
  
var section = document.createElement("section");

Object.defineProperties(section, {
	
	"ftn": {
		get: function () { return store.ftn; },
		set: function ($in) {	store.data = $in; build(); }
	},
	
	"data": {
		get: function () { return store.data; },
		set: function ($in) {	store.data = $in; build(); }
	},

};

function build () {

	section.textContent = "";

	if (store.ftn === null || store.data === null) return; 
	
	store.data.forEach(function ($v) {
		section.appendChild(store.ftn($v));
	});
	
};
	
return section;

}());
