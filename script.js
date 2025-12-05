/* 
   DOM MANIPULATION EXAMPLES
   
   This code only shows how to:
   1. Select elements from the page.
   2. Listen for clicks.
   3. Change text and style.
   
   There is NO game logic (no math, no random numbers, no rules).
*/

window.onload = function () {

    // --- Navigation (Showing/Hiding Pages) ---
    function updatePageVisibility() {
        let hash = window.location.hash;
        let pages = document.getElementsByClassName('page');

        // Hide all pages first
        for (let i = 0; i < pages.length; i = i + 1) {
            pages[i].style.display = 'none';
        }

        // Show the one matching the hash
        if (hash) {
            // Find the specific page by ID
            // "hash" includes the #, so we can use it directly as a selector if we wanted, 
            // but here we loop to keep it simple with what we did before.
            for (let i = 0; i < pages.length; i = i + 1) {
                if ('#' + pages[i].id === hash) {
                    pages[i].style.display = 'block';
                }
            }
        } else {
            // No hash? Show home.
            let home = document.getElementById('home');
            if (home) {
                home.style.display = 'block';
            }
        }
    }
    window.onhashchange = updatePageVisibility;
    updatePageVisibility();


    // --- Example 1: Reading Input (Guess Game Page) ---
    let guessGame = document.getElementById('guess-game');
    if (guessGame) {
        let input = guessGame.getElementsByTagName('input')[0];
        let buttons = guessGame.getElementsByTagName('button');
        let submitBtn = buttons[0];
        let msgDisplay = guessGame.getElementsByTagName('p')[0];

        submitBtn.onclick = function () {
            // 1. Get the value user typed
            let text = input.value;

            // 2. Change the paragraph text
            msgDisplay.textContent = "You typed: " + text;

            // 3. Change color
            msgDisplay.style.color = "blue";
        };
    }


    // --- Example 2: Changing Text (Dice Game Page) ---
    let diceGame = document.getElementById('dice-game');
    if (diceGame) {
        let diceDisplay = diceGame.getElementsByTagName('div')[2];
        let rollBtn = diceGame.getElementsByTagName('button')[0];

        rollBtn.onclick = function () {
            // Simply change the text content to a fixed emoji
            diceDisplay.textContent = "★";
            // Or change color
            diceDisplay.style.color = "gold";
        };
    }


    // --- Example 3: Changing Style (Memory Game Page) ---
    let memoryGame = document.getElementById('memory-game');
    if (memoryGame) {
        let card = memoryGame.getElementsByClassName('card')[0]; // Just the first card

        // If it exists
        if (card) {
            card.onclick = function () {
                // Change background color
                card.style.background = "white";
                // Change text
                card.textContent = "☺";
            };
        }
    }


    // --- Example 4: Multiple Buttons (Color Game Page) ---
    let colorGame = document.getElementById('color-game');
    if (colorGame) {
        let colorText = colorGame.getElementsByClassName('color-text')[0];
        let colorBtns = colorGame.getElementsByClassName('color-btn');

        // Loop through all color buttons
        for (let i = 0; i < colorBtns.length; i++) {
            colorBtns[i].onclick = function () {
                // Get the second class name (red, blue, green, yellow)
                // classList[1] assumes the second class is the color name
                let color = this.classList[1];

                // Change text color and content
                colorText.style.color = color;
                colorText.textContent = color.toUpperCase() + " SELECTED";
            };
        }
    }


    // --- Example 5: Reaction Time (Click Event) ---
    let reactionGame = document.getElementById('reaction-game');
    if (reactionGame) {
        let reactionBox = reactionGame.getElementsByClassName('reaction-box')[0];

        if (reactionBox) {
            reactionBox.onclick = function () {
                // Change style on click
                this.style.backgroundColor = "green";
                this.textContent = "CLICKED!";
                this.style.color = "white";
            };
        }
    }


    // --- Example 6: Math Quiz (Input & Check) ---
    let mathGame = document.getElementById('math-game');
    if (mathGame) {
        let submitBtn = mathGame.getElementsByTagName('button')[0]; // First button is Submit
        let input = mathGame.getElementsByTagName('input')[0];
        let question = mathGame.getElementsByClassName('math-question')[0];

        if (submitBtn) {
            submitBtn.onclick = function () {
                let val = input.value;
                // Just display what they typed, no validation logic
                question.textContent = "You answered: " + val;
                question.style.color = "purple";
            };
        }
    }


    // Note: We ignored Reaction and Math games to keep this file short and simple.
};
