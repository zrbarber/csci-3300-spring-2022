function letsGo() {
    let name = "";
    let price = 0;
    let total = 0;
    let message = "<table> <tr> <th>Item</th> <th>Price</th> </tr>";

    document.getElementById("results").innerHTML =
    `<tr> <th>Item</th> <th>Price($)</th> </tr>`

    while (true) {
        name = prompt("Enter an item for the grocery list, or type 'done' if finished.");

        if (name == "done") {
            break;
        }

        price = parseFloat(prompt("Enter the price of the item."));

        while (isNaN(price)) {
            alert("That's not a price/number!");
            price = parseFloat(prompt("Enter the price of the item."));

        }

        message += `<tr> <td>${name}</td> <td>${price}</td> </tr>`;
        total += price;
    }

    message += "</table> The total of the list is $" + total.toFixed(2);
    document.getElementById("results").innerHTML = message;
}