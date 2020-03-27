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

var username = document.createElement("input");
main.appendChild(username);
username.type = "text";
username.value = "test";

var password = document.createElement("input");
main.appendChild(password);
password.type = "password";
password.value = "test";

var buttonSignIn = document.createElement("button");
main.appendChild(buttonSignIn);
buttonSignIn.textContent = "Sign In";
buttonSignIn.onpointerdown = function () {
	console.log(2);
	alert(username.value + " " + password.value);
};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

var sso = document.querySelector("#sso");

var counter = 10;

function ssoTry () {

	var user = sso.querySelector("#user").value;
	var pass = sso.querySelector("#pass").value;
	if (user !== "" && pass !== "") {
		username.value = user;
		password.value = pass;
		console.log(1);
		buttonSignIn.onpointerdown();
	};

	if (--counter === 0) {
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
