
let adiniz = prompt("Lutfen Adinizi Giriniz.")
let isim = document.querySelector("#myName")
isim.innerHTML = `${adiniz}`

let myClock = document.querySelector("#myClock")

function showTime(){
      let currentDate = new Date(); 
      let hours = currentDate.getHours(); 
      let minutes = currentDate.getMinutes(); 
      let seconds = currentDate.getSeconds();
      return hours + ':' + minutes + ':' + seconds;
}

const d = new Date();
let day = d.getDay();
function getClock() {
    day == 1 ? day = "Pazartesi" : day == 2 ? day="Salı" : day == 3 ? day = "Çarşamba" : day == 4 ? day = "Perşembe": day == 5 ? day="Cuma": day == 6 ? day = "Cumartesi": day="Pazar"}
    getClock()

myClock.innerHTML= `${showTime()} ${day}`
