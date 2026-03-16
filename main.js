// This runs immediately when the script is loaded by the browser
console.log('delivrd');

/**
 * Changes the background to a random color and logs a message.
 */
function btnCalc() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the background color of the page
    document.body.style.backgroundColor = randomColor;
    
    // Output the print statement
    console.log("Button clicked! New color: " + randomColor);
}
