(function() {
    // 1. Clear the body and setup the "PoC" text with centering styles
    document.body.innerHTML = `
        <div id="poc-container" style="
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 5rem;
        ">
            PoC Arbitrary JS Loaded
        </div>
    `;

    // 2. Define the colors to cycle through
    const colors = ['red', 'blue', 'green'];

    // 3. Set the interval to change the background every 1000ms
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomIndex];
    }, 1000);
})();
