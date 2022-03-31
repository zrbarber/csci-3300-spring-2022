function letsGo() {
    let NUMBER_OF_VALUES = 0;
    let NUMBER_OF_FLOAT_VALUES = 0;
    let total = 0;
    let average = 0;
    let floatTotal = 0;
    let floatAverage = 0;
    let message = "<ul>";

    while (true) {
        let number = prompt("Enter a positive float/number. Enter '-1' when finsished!");
        number = parseFloat(number);

        if (isNaN(number)) {
            alert("That wasn't a number!")
        }
        else if (number == -1) {
            break;
        }
        else if (number % 2 == 0) {
            message += `<li>${number} is an even value.</li>`;

            total += number;
            NUMBER_OF_VALUES++;
        }
        else if (number % 2 == 1) {
            message += `<li>${number} is an odd value.</li>`;

            total += number;
            NUMBER_OF_VALUES++;
        }
        else {
            message += `<li>${number} is a floating-point value.</li>`;

            total += number;
            floatTotal += number;
            NUMBER_OF_VALUES++;
            NUMBER_OF_FLOAT_VALUES++;
        }

    }

    message += "</ul>";

    if (NUMBER_OF_VALUES == 0) {
        message = "<p>No values were entered!</p>";
    }
    else {
        average = total / NUMBER_OF_VALUES;
        average = average.toFixed(2);
        total = total.toFixed(2);

        message += `<p>The total is ${total}, and the average is ${average}.</p>`;
    }

    if (NUMBER_OF_FLOAT_VALUES == 0) {
        message += "<p>No floating-point values were entered!</p>";
    }
    else {
        floatAverage = floatTotal / NUMBER_OF_FLOAT_VALUES;
        floatAverage = floatAverage.toFixed(2);
        floatTotal = floatTotal.toFixed(2);

        message += `<p>The sum of just the floating-point values is ${floatTotal} with an average of ${floatAverage}.</p>`;
    }

    document.getElementById("results").innerHTML = message;
}