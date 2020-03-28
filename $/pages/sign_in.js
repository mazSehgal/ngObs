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
main.style.backgroundPosition = "center";
main.style.backgroundSize = "cover";
main.style.display = "flex";
main.style.alignItems = "center";
main.style.justifyContent = "center";

var username = document.createElement("input");
main.appendChild(username);
username.type = "text";

var password = document.createElement("input");
main.appendChild(password);
password.type = "password";

var buttonSignIn = document.createElement("button");
main.appendChild(buttonSignIn);
buttonSignIn.textContent = "Sign In";
buttonSignIn.onpointerdown = function () {
	$.db.query(["signIn", {}], function ($d) {
		$.nav.load("Menu");
	});
};

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
