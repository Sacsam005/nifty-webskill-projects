const newYears = '1-Jan-2023';

const daysUpdate = document.getElementById('days');
const hoursUpdate = document.getElementById('hours');
const minutesUpdate = document.getElementById('minutes');
const secondsUpdate = document.getElementById('seconds');

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    // calculating the time difference between the upcoming date and the current date
    const diff = (newYearsDate - currentDate) / 1000;

    // calculating the time-difference in days, hours, minutes and seconds
    const days = Math.floor(diff / 86400);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff % 60);


    // inserting the calculated values as innerHTML
    daysUpdate.innerHTML = days;
    hoursUpdate.innerHTML = formatTime(hours);
    minutesUpdate.innerHTML = formatTime(minutes);
    secondsUpdate.innerHTML = formatTime(seconds);
}

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);


