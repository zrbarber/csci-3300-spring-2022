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
        results = "The first number (" + first + ") is the middle value.";
    } else if (first == second || first == third) {
        results = "The first number (" + first + ") is the middle value.";
    } else if (second == third) {
        results = "The second number (" + second + ") is the middle value.";
    }

    if (first > second && first < third || first < second && first > third) {
        results = "The first number (" + first + ") is the middle value.";
    } else if (second > first && second < third || second < first && second > third) {
        results = "The second number (" + second + ") is the middle value.";
    } else if (third > first && third < second || third < first && third > second) {
        results = "The third number (" + third + ") is the middle value.";
    }

    document.getElementById("results").innerHTML = results;
}