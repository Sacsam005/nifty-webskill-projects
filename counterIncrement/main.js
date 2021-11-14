const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {

    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');

    const startCount = Number(counter.innerHTML);

    const incr = targetCount/100;

    if(startCount < targetCount) {
        counter.innerHTML = `${Math.round(startCount + incr)}`;
        setTimeout(updateCounter, 100)
    } else {
        counter.innerHTML = targetCount;
    }
    }
    
    updateCounter();
})