function calculate() {
    let input = document.myform.input.value;
    let results = "None of the Above";

    if (input % 2 != 0 && input % 1 == 0 && isNaN(input) == false) {
        results = "Odd";
    } else if (input % 2 == 0 && isNaN(input) == false) {
        results = "Even";
    } else if (input % 1 != 0 && isNaN(input) == false) {
        results = "Float";
    } else if (isNaN(input)) {
        results = "None of the Above";
    }

    document.getElementById("results").innerHTML = results;
}