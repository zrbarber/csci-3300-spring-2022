function letsGo() {
    let script = "";
    let rows = document.myform.rows.value;
    let columns = document.myform.columns.value;
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let k = 0;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            script += letters.charAt(k % 26) + " ";
            k++;
        }
        script += "<br>";
    }
    document.getElementById("results").innerHTML = script;
}