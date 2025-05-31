const clock = document.getElementById("clock");

//setInterval(function(){},1000); //syntax of setInterval
setInterval(function(){ //feature set interval to get time after each second where each sec is in 1000, 2sec=2000...

    let date = new Date(); //function to returns current date and Time    
    // console.log(date);
    
    clock.innerText = date.toLocaleTimeString();
    // clock.innerHTML = date.toLocalTimeString();
}, 1000);