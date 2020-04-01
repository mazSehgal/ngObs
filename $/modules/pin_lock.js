$.const.PIN = "1234";
			
(function () {

  var timer = new Date();
  window.addEventListener("pointermove", function () { timer = new Date(); });
  window.addEventListener("pointerdown", function () { timer = new Date(); });
  window.addEventListener("keydown", function () { timer = new Date(); });

  setInterval(lockScreen, 1 * 1000);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden === true) return; 
    lockScreen();
  });

  function lockScreen () {
    if (pinScreen.parentElement !== null) return;
    if (document.querySelector("main[nolock]") !== null) return;
    if (new Date() - timer < 30 * 1000) return;
    document.body.appendChild(pinScreen);
  };

  var pinScreen = document.createElement("div");
  pinScreen.style.backgroundColor = "lightgrey";
  pinScreen.style.position = "absolute";
  pinScreen.style.zIndex = "999";
  pinScreen.style.top = "0";
  pinScreen.style.left = "0";
  pinScreen.style.width = "100%";
  pinScreen.style.height = "100%";
  pinScreen.style.display = "flex";
  pinScreen.style.flexDirection = "column";
  pinScreen.style.alignItems = "center";
  pinScreen.style.justifyContent = "center";

  var input = document.createElement("input");
  pinScreen.appendChild(input);
  input.type = "text";
  input.value = "1234";

  var button = document.createElement("button");
  pinScreen.appendChild(button);
  button.textContent = "Unlock";
  button.onpointerdown = function () {
    if (input.value !== $.const.PIN) return;
    pinScreen.parentNode.removeChild(pinScreen);
  };

}());
