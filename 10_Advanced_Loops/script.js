function letsgo() {
    const NUMBER_OF_VALUES = 7;
    let total = 0;
    let message = "<ul>";

    for (let i = 0; i < NUMBER_OF_VALUES;) {
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

            total += number;
            i++;
        }
    }

    let average = total / NUMBER_OF_VALUES;

    message += "</ul>";
    message += `<p>The total of the values is ${total}.</p>`;
    message += `<p>The average of the values is ${average}.</p>`;

    document.getElementById("results").innerHTML = message;
}