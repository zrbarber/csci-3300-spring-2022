let memeimage = "";

function setImage(images) {
    let image = "";

    for (let i = 0; i < images.length; i++) {
        if (images[i].selected) {
            image = images[i].value;
        }
    }
    document.getElementById("mymeme").backgroundImage = `url("${image}")`;
}

function setText(text) {
    memetext = `<span id="memetext">${text.value}</span>`;
    document.getElementById("mymeme").innerHTML = memeimage + memetext;
}