let randomNumber=Math.floor((Math.random()*100))+1;
let guessNumber=document.getElementById("txt");
let chances=0;//this to manage the tries
let count=0;//tracking the users tries
console.log(randomNumber);
// Get the dropdown element
const leveldropDown =document.getElementById("level");
//adding eventlistener in select option
leveldropDown.addEventListener("change" ,function(){
    const selectedLevel=leveldropDown.value; //selcting different levels 
    if(selectedLevel!="level"){
        
        if(selectedLevel=="Easy")
            {
                chances=3;
            }else if(selectedLevel=="Medium"){
                chances=5;
            
            }else if(selectedLevel=="Hard"){
                chances=10;
            }
            document.getElementById("selected-level").innerText = `You selected : ${selectedLevel} , Chances : ${chances}`;
            
            
    }else{
        document.getElementById("selected-level").innerText = "Please select level";
    }

});
//for easy level = only 3 try
//for medium level =only 5 try
//for hard level = 10 try to guess that number

//number guess logic
guessNumber.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const userGuess = parseInt(guessNumber.value); // Get the user's guess as a number

        // Ensure input is a valid number
        if (isNaN(userGuess)) {
            document.getElementById("para").innerText = "Please enter a valid number.";
        
        }

    // Game logic
    if (count < chances) {
        if (userGuess > randomNumber) {
            document.getElementById("para").innerText = "Guess lower!";
            
        } else if (userGuess < randomNumber) {
            document.getElementById("para").innerText = "Guess Higher";
        } else if (userGuess === randomNumber) {
            document.getElementById("para").innerText = `You guessed it right on your ${count + 1} try! 🎉`;
            document.getElementById("para").style.color="green";
            return; // Stop the game once guessed correctly
        }
        count++; // Increment the number of tries

        if (count === chances) {
            document.getElementById("para").innerText = `Game over 😞! The number was ${randomNumber}.`;
            document.getElementById("para").style.color="red";
        }
    }
}});
// Adding event listener for the restart button
document.getElementById("restart-btn").addEventListener("click", function () {
    // Reset the game state
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate new random number
    count = 0; // Reset attempts
    guessNumber.value = ""; // Clear the input field
    document.getElementById("para").innerText = "Game Restarted. Start guessing!";
    document.getElementById("selected-level").innerText = "Select a level.";
    levelDropDown.value = "level"; // Reset dropdown
});


