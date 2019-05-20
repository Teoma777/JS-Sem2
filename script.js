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
