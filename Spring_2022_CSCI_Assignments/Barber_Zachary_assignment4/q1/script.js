function secretMessage() {
    let secret = prompt("Enter the secret word...");

    while (secret != "burgers") {
        secret = prompt("Enter the secret word...");
    }

    document.getElementById("message").innerHTML = '<h1>Burgers are tasty!</h1> <img src="images/burger.jpg" alt="A juicy burger" width=25% id="image">';
}