setInterval(() =>{
    if(Math.random() > 0.5){
        document.getElementById("para1").style.fontSize = "50px";
    } else {
        document.getElementById("para1").style.fontSize = "10px";
    }
}, 5000)

setInterval(() => document.getElementById("para2").innerHTML = "Date: " + Date(), 10000)

setInterval(() =>{
    const random = Math.random();
    if(random < 0.33){
        document.getElementById("para3").style.backgroundColor = "Yellow";
    } else if (random < 0.66) {
        document.getElementById("para3").style.backgroundColor = "Magenta";
    } else {
        document.getElementById("para3").style.backgroundColor = "Cyan";
    }
}, 3000)