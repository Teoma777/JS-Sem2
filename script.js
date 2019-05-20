var footer = document.querySelector("footer");
var footerCount = 1 ;

footer.addEventListener("click", function() {
	console.log("clique numéro " + footerCount);
	footerCount ++;
});
