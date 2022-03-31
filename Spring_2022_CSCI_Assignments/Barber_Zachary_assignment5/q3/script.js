function letsGo() {
    let message = "<ul>";
    let minute = 1;

    let aSpeed = parseFloat(document.myform.a.value);
    let bSpeed = parseFloat(document.myform.b.value);

    let aDistance = 0;
    let bDistance = parseFloat(document.myform.distance.value);

    if (isNaN(aSpeed) || isNaN(bSpeed) || isNaN(bDistance)) {
        alert("Error! Please only enter numerical values.");
    }
    else {
        aSpeed = aSpeed / 60;
        bSpeed = bSpeed / 60;

        do {
            aDistance += aSpeed;
            bDistance -= bSpeed;

            message += `<li><u><b>Minute ${minute}:</b></u> Train A Position: ${aDistance.toFixed(2)} miles | Train B Position: ${bDistance.toFixed(2)} miles</li>`;
            minute++;
        } while (aDistance < bDistance);

        message += `</ul><h3>The trains end up meeting around the ${aDistance.toFixed(2)} mile mark after ${minute - 1} minutes!</h3>`;
        document.getElementById("results").innerHTML = message;
    }
}