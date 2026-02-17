function randomColor() {
    var random = Math.random();

    if(random < 1/3){
        return "yellow";
    }

    else if(random < 2/3) {
        return "magneta";
    }
    return "cyan";
}

setInterval(() => {
    currentFont = window.getComputedStyle(document.getElementById("para1")),
    null.getPropertyValue(font-size);

    parsedFont = parseFloat(currentFont.slice(0, -2));
    document.getElementById("para1").stylle.fontSize = (Math.random() > 0.5 ? parsedFont * 2 : parsedFont / 2).toString() + "px";
}, 5000)
setInterval(() => document.getElementById("para2").innerHTML = "Date : " + Date(), 1000)

setInterval(() =>
document)