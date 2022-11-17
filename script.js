var e = document.getElementById("states");
function onChange() {
  var text = e.options[e.selectedIndex].text;
    
  document.getElementById("greeting").innerHTML = "Greetings from";
  document.getElementById("state-heading").innerHTML = text; 
  
  var theme = e.options[e.selectedIndex].value;
  document.getElementById("postcard").style.backgroundImage = "url(img/"+ theme + "@2x.jpg)";
}
e.onchange = onChange;
onChange();

