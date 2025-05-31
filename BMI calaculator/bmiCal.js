// we will going to calculate the value or result throgh the input user will fill in 
// as it is form so we will use "submit" instead of click in it in event

const form = document.querySelector("form");

form.addEventListener("submit", function(eve){ //we are getting the values such as height and weight only after clicking on submit button in form
    //Thatswhy we are using these inside the eventListener instead of outside the eventListener
    //if we use these height and weight outside the eventListener then we'll getting empty values as results

    eve.preventDefault(); //we need to stop or prevent the input to go into the server instead we'll use it in calculation 

    const height = parseInt(document.querySelector("#height").value); //parseInt is use to convet the string into the integer
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === ''|| height<0 || isNaN(height)) //check for height as input NaN with the help of "isNaN()" function instead of height !=NaN
    {
        results.innerHTML = 'Please give the valid input!';
    }else if(weight === ''|| weight<0 || isNaN(weight)) //check for height as input NaN with the help of "isNaN()" function instead of height !=NaN
    {
        results.innerHTML = 'Please give the valid weight!';
    }else{
        const bmi = (weight/(height*height/10000)).toFixed(2);
        //show the result 
        if(bmi < 18.5)
        {
            results.textContent = `${bmi}, oops, Under Weight!`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9)
        {
            results.textContent = `${bmi}, You are perfectly fit and fine!`;
        }
        else if(bmi > 24.9)
        {
            results.textContent = `${bmi}, oops, Over Weight!`;
        }
    }

});

