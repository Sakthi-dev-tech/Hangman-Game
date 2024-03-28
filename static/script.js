var guessCounter = 0;
var pressed = false;
var image_count = 0;

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
            loseLife = false;
        }
    };

    if (loseLife){
        const livesSpan = document.getElementById("remaining-lives");
        const image = document.getElementById("image");
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

        image_count = image_count + 1;
        console.log(image_count);
        image.src = "../static/media/" + image_count + ".jpg";
    }
    
    var won = true;
    var divElements = document.querySelectorAll("h3");
    
    for (var i = 0; i < divElements.length; i++){
        if (divElements[i].innerHTML === '_'){
            won = false;
            break;
        };
    };

    if (won){
        alert("You won! The word was: " + word);
        window.location.reload();
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

