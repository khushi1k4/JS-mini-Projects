const buttons = document.querySelectorAll(".button"); //nodeList we get from query Selcetor so we can apply forEach loop on it
const body = document.querySelector("body");

buttons.forEach(function(button)
{
    console.log(button);
    button.addEventListener("click", function(eve){
        console.log(eve);
        console.log(eve.target);
        let color = eve.target.id;
        switch (color) {
            case "grey":
                body.style.backgroundColor = color;
                break;

            case "yellow":
                body.style.backgroundColor = color;
                break;

            case "white":
                body.style.backgroundColor = color;
                break;

            case "blue":
                body.style.backgroundColor = color;
                break;
            
            case "purple":
                body.style.backgroundColor = color;

            case "red":
                body.style.backgroundColor = color;
                
            default:
                break;
        }
    }, false);
})