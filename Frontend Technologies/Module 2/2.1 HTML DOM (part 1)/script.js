setInterval(() =>{
    if(Math.random() > 0.5){
        document.getElementById("para1").style.fontSize = "50px";
    } else {
        document.getElementById("para1").style.fontSize = "10px";
    }
}, 5000)

setInterval(() => document.getElementById("para2").innerHTML = "Date: " + Date(), 10000)

function randomColor(){
    const r = Math.random();

    if(r < 1/3 ) {
        return "yellow";
    } else if (r < 2/3) {
        return "magenta";
    } else {
        return "cyan";
    }
}

document.getElementById("para3").style.backgroundColor = randomColor();