// input 

var screen = document.getElementById("screen")
console.log(screen.innerHTML)

//numbers

function one() {
    screen.textContent = screen.textContent+1
}
function two() {
    screen.textContent = screen.textContent+2
}
function three() {
     screen.textContent = screen.textContent+3
}
function four() {
     screen.textContent = screen.textContent+4
}
function five() {
    screen.textContent = screen.textContent+5
}
function six() {
     screen.textContent = screen.textContent+6
}
function seven() {
     screen.textContent = screen.textContent+7
}
function eight() {
     screen.textContent = screen.textContent+8
}
function nine() {
     screen.textContent = screen.textContent+9
}
function zero() {
     screen.textContent = screen.textContent+0
}
function doublezero() {
    screen.textContent = screen.textContent+0+0
}
function thrirplezero() {
     screen.textContent = screen.textContent+0+0+0
}

//back
function back() {
    screen.textContent=screen.textContent.slice(0,-1)
}

//clear

clear
function ac() {
    screen.textContent =""
}
 
//operators

function plus() {
    screen.textContent = screen.textContent+ "+"
}
function minus() {
    screen.textContent = screen.textContent+ "-"
}
function star() {
    screen.textContent = screen.textContent+ "*"
}
function percent() {
    screen.textContent = screen.textContent+ "%"
}

function enter() {
    try{
        screen.textContent = eval(screen.textContent)
    }
    catch{
        screen.textContent = "invalid"
    }
}
