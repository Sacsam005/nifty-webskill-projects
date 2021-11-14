const tempLoad = () => {
    let temp = document.getElementById('temp');
temp.innerHTML = '&#xf2cb;';

setTimeout(() => {
    temp.innerHTML = '&#xf2ca';         //starts from an empty thermometer
}, 1000);

setTimeout(() => {
    temp.innerHTML = '&#xf2c9';
    temp.style.color = '#f8b627';       //color changes as being refilled
}, 2000);

setTimeout(() => {
    temp.innerHTML = '&#xf2c8';
}, 3000);

setTimeout(() => {
    temp.innerHTML = '&#xf2ca7';
    temp.style.color = '#d63031';       //color full-red
}, 4000);

}
tempLoad();
setInterval(tempLoad, 5000);    //set the infinite loop after 4seconds to continue refi