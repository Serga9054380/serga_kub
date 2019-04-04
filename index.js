let i = ()=>{
    document.getElementById("play").play()
    let x = Math.floor(Math.random() * 6) + 1;
    if(x===1){
        document.getElementById("32").src='1.jpg'
    }
    if(x===2){
        document.getElementById("32").src='2.jpg'
    }
    if(x===3){
        document.getElementById("32").src='3.jpg'
    }
    if(x===4){
        document.getElementById("32").src='4.jpg'
    }
    if(x===5){
        document.getElementById("32").src='5.jpg'
    }
    if(x===6){
        document.getElementById("32").src='6.jpg'
    }
}