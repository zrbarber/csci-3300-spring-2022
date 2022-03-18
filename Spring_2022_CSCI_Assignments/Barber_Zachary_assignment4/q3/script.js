function getWords() {
    let catCount = 0;
    let dogCount = 0;
    let message = "";
    let word = "";

    do {
        word = prompt("Enter a word, or type 'done' if finished.");
        word = word.toLowerCase();

        if (word.indexOf("cat") >= 0) {
            catCount++;
        }
        if (word.indexOf("dog") >= 0) {
            dogCount++;
        }
    } while (word != "done");

    message += `<p>You typed "dog" ${dogCount} times and "cat" ${catCount} times.</p>`;

    document.getElementById("results").innerHTML = message;
}
