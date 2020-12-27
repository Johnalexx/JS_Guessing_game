function submit(){
    var guess = document.getElementById("guess").value; 
    var rndGuess =  Math.floor(Math.random() * 10) + 1 ;

    if (guess == "") {
        alert("Guess Field can't be empty!");
        return false;
    }
        else if (guess > 10){
            alert("Guess must be less than 10!");
        }
    else{

            document.getElementById('impGuess').innerHTML = "Inputed Guess: " + guess; 
            document.getElementById('systGuess').innerHTML ="System Guess was: " + rndGuess;  
                            
                            if(guess == rndGuess) 
                        {     
                            document.getElementById('result').innerHTML = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT"; 
                            document.getElementById('result').className = "success";
                        } 
                        else { 
                            document.getElementById('result').innerHTML = "Sorry, You Guessed Wrong, Try Again."; 
                            document.getElementById('result').className = "danger";
                        } 

    }
}