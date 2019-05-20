var footer = document.querySelector("footer");
var footerCount = 1 ;

footer.addEventListener("click", function() {
	console.log("clique numéro " + footerCount);
	footerCount ++;
});




var burgerButton = document.getElementsByClassName("navbar-toggler")[0];
var navBar = document.getElementById("navbarHeader");

	burgerButton.addEventListener("click", function() {
	navBar.classList.toggle("collapse");
	 }); 

var redEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var redText = document.getElementsByClassName("card-text")[0];
redEdit.addEventListener("click", function() {
redText.style.color = "red";	
	console.log("RED OK");
});
