"use strict";

// Wait for DOM to load
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
}
