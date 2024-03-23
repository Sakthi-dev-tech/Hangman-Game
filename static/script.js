var guessCounter = 0;
var pressed = false;

function myFunc(){
    return wordlen, word;
};

function letterGuessed(buttonValue){
    // trying to find the id of the h3 elements that has the letters for guessing
    const targetElement = document.getElementsByClassName(buttonValue);

    var loseLife = true;

    for (var i = 0; i < targetElement.length; i++){

        if (targetElement){
            var element = targetElement[i];
            element.innerHTML = buttonValue;
            guessCounter++;
            loseLife = false;
        }
    };

    if (loseLife){
        const livesSpan = document.getElementById("remaining-lives");
        let currentLives = parseInt(livesSpan.textContent);

        if (currentLives > 0){
            currentLives--;
            livesSpan.textContent = currentLives;
        }
        else{
            currentLives--;
            alert("Game Over!");
            window.location.reload();
        };
    }
    else{
        if (guessCounter === wordlen){
            setTimeout(2000);
            alert("You Won! The word was: " + word);
            window.location.reload();
        };
    };
    
};

document.addEventListener("keydown", (event) => {
    const keyPressed = event.key;
    if (!pressed){
        pressed = true;
        if (keyPressed.codePointAt(0) >= 97 && keyPressed.codePointAt(0) <= 122){
            letterGuessed(keyPressed);
        }
        else if (keyPressed.codePointAt(0) >= 65 && keyPressed.codePointAt(0) <= 90){
            letterGuessed(String.fromCharCode(keyPressed.codePointAt(0) + 32));
        };
    };
    window.addEventListener("keyup", function(){pressed = false;});
});

