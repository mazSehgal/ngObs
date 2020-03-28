$.pages["Fluids"] = (function () {

  Ext["Fluids"].save = function () {
    alert(JSON.stringify(store));
  };
  
  return {
    "forward": Ext["Fluids"].forward,
    "back": Ext["Fluids"].back,
  };
  
}());
