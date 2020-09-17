// Update Time
// create a function
const setDate = () => {
    const hourHand = document.querySelector(".hour-hand");
    const minsHand = document.querySelector(".min-hand");
    const secondHand = document.querySelector(".second-hand");

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();
    // turn into degrees
    const secondDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = (`rotate(${secondDegrees}deg)`);

    const minsDegrees = ((minutes/60) * 360) + 90;
    minsHand.style.transform = (`rotate(${minsDegrees}deg)`);

    const hourDegrees = ((hour/12) * 360) + 90;
    hourHand.style.transform = (`rotate(${hourDegrees}deg)`);

}

//Run every second
setInterval(setDate, 1000);