
document.getElementById("toggleBtn").onclick = function() {myFunction()};

function myFunction(){
   var element = document.getElementById("toggleBtn");
   element.classList.toggle('toggleBtnOn');
   var element = document.getElementById("items01");
   element.classList.toggle("itemsOn");
   var element = document.getElementById("items02");
   element.classList.toggle("itemsOn");
   var element = document.getElementById("innerContainer01");
   element.classList.toggle("innerContainer01On");
   var element = document.getElementById("subText");
   element.classList.toggle("subTextOn");
   var element = document.getElementById("toggleBtnInner");
   element.classList.toggle("toggleBtnInnerOn");

 }

 // chrome.runtime.sendMessage(p, function(response) {
 //   alert("triggered");
 //   console.log(`message from background: ${JSON.stringify(response)}`);
 // });
