console.log("Chrome extension go")

var greeting = "hola, ";
var button = document.getElementById("toggleBtn");
button.person_name = "Roberto";
button.addEventListener("click", function() {
  alert(greeting + button.person_name + ".");
}, false);
//
// document.getElementById("toggleBtn").addEventListener("click", styleChange);
//
// (function styleChange() {
//   var sheet = document.createElement("style")
//   sheet.innerHTML = " div{background-image:none !important;}*{background-image:transparent !important; background-color: transparent !important; color: red !important;-webkit-box-shadow: none !important; -moz-box-shadow: none !important; box-shadow: none !important;} .row{border: solid 1px red;  border-bottom: 0;} .col, [class*='col-']{border-left: solid 1px red;} .btn, .form-control, .navbar, i, .table-bordered>tbody>tr>td, th,.panel, .button{ border: solid 1px red !important; background-color:transparent !important; color: red; background:transparent !important;}";
//   document.body.appendChild(sheet);
// })();

// var sheet = document.createElement('style')
// sheet.innerHTML = " div{background-image:none !important;}*{background-image:transparent !important; background-color: transparent !important; color: red !important;-webkit-box-shadow: none !important; -moz-box-shadow: none !important; box-shadow: none !important;} .row{border: solid 1px red;  border-bottom: 0;} .col, [class*='col-']{border-left: solid 1px red;} .btn, .form-control, .navbar, i, .table-bordered>tbody>tr>td, th,.panel, .button{ border: solid 1px red !important; background-color:transparent !important; color: red; background:transparent !important;}";
// document.body.appendChild(sheet);
