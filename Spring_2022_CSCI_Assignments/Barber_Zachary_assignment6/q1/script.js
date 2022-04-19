let height = parseFloat(document.myform.height.value);
let width = parseFloat(document.myform.width.value);

let message = "";

function calculate() {
    if (isNaN(height) || isNaN(width)) {
        alert("Error! Invalid input!");
    }
}