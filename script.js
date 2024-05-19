document.addEventListener('DOMContentLoaded', (event) => {
    const defaultCode = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test Code</title>
        <style>
            body {
                background-color: lightblue;
            }
            h1 {
                color: white;
                text-align: center;
                font-family: cursive;
            }
           button{
               border: 2px solid black;
               color: black;
               background-color: #28a745;
               font-family: cursive;
               font-weight: bold;
               text-align: center;
               border-radius: 10px;
               height: 50px;
               width: 20%;
               display: flex;
               margin-left: auto;
               margin-right: auto;
               cursor: pointer;
               justify-content: center;
               align-items: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <button onclick="alert('Hello!')">Click Me!</button>
    </body>
    </html>`;
    document.getElementById('codeInput').value = defaultCode;
});

document.getElementById('runButton').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;

    const resultWindow = window.open('', '_blank');
    resultWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Code Result</title>
            <style>
                /* Extract and apply CSS */
                ${code.split("<style>")[1]?.split("</style>")[0] || ''}
            </style>
        </head>
        <body>
            <!-- Inject HTML -->
            ${code.split("<body>")[1]?.split("</body>")[0] || ''}
            <script>
                // Inject JavaScript
                ${code.split("<script>")[1]?.split("</script>")[0] || ''}
            </script>
        </body>
        </html>
    `);
    resultWindow.document.close();
});
