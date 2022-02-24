function calculate() {
    let first = document.myform.first.value;
    first = parseFloat(first);
    let second = document.myform.second.value;
    second = parseFloat(second);
    let third = document.myform.third.value;
    third = parseFloat(third);
    let results = "";

    if (isNaN(first) || isNaN(second) || isNaN(third)) {
        results = "Please enter a number in all fields!";
    } else if (first == second && first == third) {
        results = "The first number (" + first + ") is the largest.";
    } else if (first == second || first == third) {
        results = "The first number (" + first + ") is the largest.";
    } else if (second == third) {
        results = "The second number (" + second + ") is the largest.";
    }

    if (first > second && first > third) {
        results = "The first number (" + first + ") is largest.";
    } else if (second > first && second > third) {
        results = "The second number (" + second + ") is largest.";
    } else if (third > first && third > second) {
        results = "The third number (" + third + ") is largest.";
    }

    document.getElementById("results").innerHTML = results;
}