function calculate() {
    let floatNum = document.myform.number.value;
    floatNum = parseFloat(floatNum);
    let intNum = parseInt(floatNum);
    let results = "";

    if (isNaN(floatNum)) {
        results = "Please enter a number."
    } else if (floatNum - intNum >= 0.5) {
        results = "The nearest integer is " + (intNum + 1);
    } else {
        results = "The nearest integer is " + intNum;
    }

    document.getElementById("results").innerHTML = results;
}