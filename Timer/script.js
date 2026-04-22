const targetDate = new Date('2026-12-31T23:59:59');

function Remainingtime() {
    const currentDate =new Date();
    const itog = targetDate-currentDate;
    const days = Math.floor(itog/(1000*60*60*24));
    const hours = Math.floor((itog % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((itog %(1000*60*60))/(1000*60))
    const seconds = Math.floor((itog % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (itog<0){
        clearInterval(interval);
        document.getElementById("timer").ineerText = "Начало события!";
    }

}
const interval = setInterval(Remainingtime,1000);

