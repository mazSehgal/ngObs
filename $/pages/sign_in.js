$.pages["Sign In"] = (function () {

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

function forward () {
	ssoTry();
	back();
};

function back () {
	document.querySelector("main").replaceWith(main);
};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

var main = document.createElement("main");
main.style.flex = "1 1 auto";
main.style.backgroundImage = "url('" + $.const.root + "$/resources/splash.png')";
main.style.backgroundPosition = "center center";
main.style.backgroundSize = "cover";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";
main.style.justifyContent = "space-evenly";

var table = document.createElement("table");
main.appendChild(table);
table.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
table.style.borderRadius = "10px";
table.style.padding = "10px";

var tr = document.createElement("tr");
table.appendChild(tr);

var td = document.createElement("td");
tr.appendChild(td);
td.textContent = "Username";

var td = document.createElement("td");
tr.appendChild(td);

var username = document.createElement("input");
td.appendChild(username);
username.type = "text";

var tr = document.createElement("tr");
table.appendChild(tr);

var td = document.createElement("td");
tr.appendChild(td);
td.textContent = "Password";

var td = document.createElement("td");
tr.appendChild(td);

var password = document.createElement("input");
td.appendChild(password);
password.type = "password";

var tr = document.createElement("tr");
table.appendChild(tr);

var td = document.createElement("td");
tr.appendChild(td);

var td = document.createElement("td");
tr.appendChild(td);

var buttonSignIn = document.createElement("button");
td.appendChild(buttonSignIn);
buttonSignIn.textContent = "Sign In";
buttonSignIn.style.width = "100%";
buttonSignIn.onpointerdown = function () {
	$.db.query(["signIn", {}], function ($d) {
		$.nav.load("Menu");
	});
};

var div = document.createElement("div");
main.appendChild(div);
div.textContent = "Ts & Cs";

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

var sso = document.querySelector("#sso");

var counter = 10;

function ssoTry () {

	var user = sso.querySelector("#user").value;
	var pass = sso.querySelector("#pass").value;
	if (user !== "" && pass !== "") {
		counter = 0;
		username.value = user;
		password.value = pass;
		buttonSignIn.onpointerdown();
	};

	if (--counter <= 0) {
		sso.parentNode.removeChild(sso);
	} else {
		setTimeout(ssoTry, 200);
	};

};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

return {
	"forward": forward,
	"back": back,
};
	
}());
