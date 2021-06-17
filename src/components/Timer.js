
let counter = 30;
let tickFunction = null; // será convertido en función
let timeUpFunction = null; // será convertido en función

//comienza el timer
function startTimer(functionTick, functionTimeUp) {
    counter = 30;
    tickFunction = functionTick;
    timeUpFunction = functionTimeUp;
    setTimeout(runTimer, 1000);
}

//hace correr el timer 
function runTimer() {
    if (counter  === 0) {
        timeUpFunction();
    } else {
        counter--; 
        setTimeout(runTimer, 1000);
        tickFunction(counter);
    }
}

export { startTimer };