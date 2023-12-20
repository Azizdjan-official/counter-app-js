
let left = new Date("Dec 16, 2024 00:00:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();
    let between = left - now;

    let years = Math.floor(between /  (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(between / (1000 * 60 *60 *24));
    let hours = Math.floor((between % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
    let minutes = Math.floor((between % (1000 * 60 *60)) / (1000 * 60) );
    let seconds = Math.floor((between % (1000 * 60)) / 1000);


    let yearsContent =document.querySelector(".yillar")
    let daysContent =document.querySelector(".kunlar")
    let hoursContent =document.querySelector(".soatlar")
    let minutesContent =document.querySelector(".minutlar")
    let secondsContent =document.querySelector(".sekundlar")

    yearsContent.textContent = years;
    daysContent.textContent = days;
    hoursContent.textContent = hours;
    minutesContent.textContent = minutes;
    secondsContent.textContent = seconds;

},1000);


// let bugungiKun =document.querySelector(".kunlar")
    // let hoursContent =document.querySelector(".soatlar")
    // let minutesContent =document.querySelector(".minutlar")
    // let secondsContent =document.querySelector(".sekundlar")


    // let d = new Date();
    // let kun = d.getDate()
    // console.log(kun);
    // bugungiKun.textContent = kun;

