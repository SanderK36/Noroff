function getRandomColor() {
    const r = Math.random();
    if (r < 1/3) {
        return "yellow";
    } else if (r < 2/3) {
        return "magenta";
    } else {
        return "cyan";
    }
}
setInterval(() => {
    currentFont = window.getComputedStyle(document.getElementById("para1"), null).getPropertyValue("font-size");
    parseFont = parseFloat(currentFont.slice(0, -2 ));
    document.getElementById("para1").style.fontSize = (Math.random () > 0.5 ? parseFont * 2 : parseFont / 2).toString() + "px";
}, 5000)

setInterval(() => document.getElementById("para2").innerHTML = "Date today is: " + Date(), 10000)
setInterval(() => document.getElementById("para3").style.backgroundColor = getRandomColor(), 3000) 




// setInterval(() =>{
//     if(Math.random() > 0.5){
//         document.getElementById("para1").style.fontSize = "50px";
//     } else {
//         document.getElementById("para1").style.fontSize = "10px";
//     }
// }, 5000)

// setInterval(() => document.getElementById("para2").innerHTML = "Date: " + Date(), 10000)

// function randomColor(){
//     const r = Math.random();

//     if(r < 1/3 ) {
//         return "yellow";
//     } else if (r < 2/3) {
//         return "magenta";
//     } else {
//         return "cyan";
//     }
// }

// setInterval(() => document.getElementById("para3").style.color = randomColor(), 3000)