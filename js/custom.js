"use strict";

// Wait for DOM to load
window.onload = function(){
    fetch('https://api.github.com/repos/adilius/adilius.github.io')
    .then(response => response.json())
    .then(data => {
        var updateDate = new Date(data.updated_at)
        var currentDate = new Date();
        var daysDifference = Math.abs(currentDate - updateDate)

        //currentDate = currentDate.toISOString()

        var timeDifference = Math.floor(Math.abs(currentDate - updateDate)/(1000 * 60 * 60))
        console.log(updateDate)
        console.log(currentDate)
        console.log(daysDifference)
        document.getElementById("repoDate").innerHTML = timeDifference;
        if(timeDifference == 1){
            document.getElementById("repoDate").innerHTML += " hour";
        }else{
            document.getElementById("repoDate").innerHTML += " hours";
        }
        document.getElementById("repoDate").innerHTML += " ago.";

    })
}
