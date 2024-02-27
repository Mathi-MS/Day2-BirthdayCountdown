var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")

function birthdaycount() {
    const currentYear = new Date().getFullYear()
    const birthday = new Date(`August 17 ${currentYear} 00:00:00`)
    const currentDate =new Date()
    const diff = birthday - currentDate
    const day = Math.floor(diff/1000/60/60/24)
    const hour = Math.floor((diff/1000/60/60)%24)
    const minute = Math.floor((diff/1000/60)%60)
    const second = Math.floor((diff/1000)%60)
    days.textContent =day<10?"0"+day:day
    hours.textContent =hour<10?"0"+hour:hour
    minutes.textContent =minute<10?"0"+minute:minute
    seconds.textContent =second<10?"0"+second:second
}
setInterval(birthdaycount,1000)