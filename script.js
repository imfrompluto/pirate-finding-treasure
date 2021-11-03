let img = document.getElementById("img")
let pirate = document.getElementsByClassName("pirate")[0]
let treasureX = Math.floor(Math.random()*406)
let treasureY = Math.floor(Math.random()*406)
let clicks = 0;
let messages = document.getElementById("messages")

img.onclick = function(event){
    // console.log(4055924821)
    // console.log(event.offsetX)
    // console.log(event.offsetY)
    let pirateX = event.offsetX-25
    pirate.style.left = pirateX+"px"
    let pirateY = event.offsetY-25
    pirate.style.top = pirateY+"px"
    clicks = clicks+1;
    let x =treasureX - pirateX
    let y = treasureY - pirateY
    let dist =Math.sqrt(x*x+y*y) 
    console.log(dist)    
    if (dist < 10){
        messages.innerHTML = "well done, u got " +clicks+ " steps"

    }
    else if (dist < 20){
        messages.innerHTML = "boiling hot"

       
    }
    else if (dist < 30){
        messages.innerHTML = "hot"
    }

    else if (dist < 40){
        messages.innerHTML = "getting chilly"
    }

    else if (dist < 50){
        messages.innerHTML = "windy"
    }

    else if(dist < 60){
        messages.innerHTML = "cold"
    }

    else if(dist < 70){
        messages.innerHTML = "russian weather"
    }

    else {
        messages.innerHTML = "go to school"
    }

}
