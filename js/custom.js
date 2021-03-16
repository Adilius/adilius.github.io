"use strict";

//When windows has finished loading
window.onload = function(){

    //API call to display page last updated
    fetch('https://api.github.com/repos/adilius/adilius.github.io')
    .then(response => response.json())
    .then(data => {
        var updateDate = new Date(data.updated_at)
        var currentDate = new Date();
        var dayDifference = Math.floor(Math.abs(currentDate - updateDate)/(1000 * 60 * 60 * 24))

        if(dayDifference == 0){
            document.getElementById("repoDate").innerHTML = " today";
        }else if(dayDifference == 1){
            document.getElementById("repoDate").innerHTML += dayDifference +" day ago";
        }else{
            document.getElementById("repoDate").innerHTML += dayDifference +" days ago";
        }
    })




    console.log("hello")
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	var email = document.getElementById('mailto-message')

	var messageCopy = "\"Click to copy email address\"";
	var messageSuccess = "\"Email address copied to clipboard\"";

    var styleElem = document.head.appendChild(document.createElement("style"));
    var message = ".mailto-message:after {content: " + messageCopy + ";}"
    styleElem.innerHTML = message;

	// On click, get href and remove 'mailto:' from value
	// Store email address in a variable.
    var mailto = document.getElementById("email")
    mailto.addEventListener("click", () => {
        console.log("hejhej")
        copyToClipboard();
        var message = ".mailto-message:after {content: " + messageSuccess + ";}"
        styleElem.innerHTML = message;
		setTimeout(function () {
            var message = ".mailto-message:after {content: " + messageCopy + ";}"
            styleElem.innerHTML = message;
		}, 2000);

    })




	
};

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard() {
	var dummy = document.createElement("input");
	document.body.appendChild(dummy);
	dummy.setAttribute("value", "adilaboulkacim@gmail.com");
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
}
