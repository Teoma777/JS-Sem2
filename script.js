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


var greenEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var greenText = document.getElementsByClassName("card-text")[1];

greenEdit.addEventListener("click", function() {
	if (greenText.style.color === "") {
		greenText.style.color = "green"
	}else{
		greenText.style.color = ""
	}
});

var atomicBar = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
var bsLink = document.querySelector("head > link:nth-child(2)");


atomicBar.addEventListener("dblclick", function() {



	if (bsLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
					console.log("ATOMIC");

			bsLink.href = ""
	}else if(bsLink.href = "file:///Users/a777/Desktop/CODE/THP/JAVA2/JS-Sem2/exo_events.html") {
		console.log("XXX")
		bsLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	}
});


var card = document.getElementsByClassName("col-md-4")[0];
var cardText = document.getElementsByClassName("card-text")[0];
var picSize = document.getElementsByClassName("card-img-top")[0];

card.addEventListener("mouseover", function() {
	console.log("CA MARCHE");
cardText.innerHTML = ""
picSize.style.width = "20%" ;

});



