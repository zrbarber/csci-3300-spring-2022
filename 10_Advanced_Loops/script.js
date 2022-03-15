function letsgo() {
    let message = "<ul>";

    for (let i = 0; i < 5;) {
        let number = prompt("Enter a number.");
        number = parseFloat(number);

        if (isNaN(number)) {
            alert("That wasn't a number!");
        } 
        else {
            if (number % 2 == 0) {
                message += `<li>${number} is even</li>`;
            }
            if (number % 2 == 1) {
                message += `<li>${number} is odd</li>`;
            }
            
            i++;
        }
    }

    message += "</ul>";

    document.getElementById("results").innerHTML = message;
}