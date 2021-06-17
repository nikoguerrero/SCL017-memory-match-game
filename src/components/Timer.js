
let counter = 30;
let tickFunction = null; 
let timeUpFunction = null; 

function startTimer(functionTick, functionTimeUp) {
    counter = 30;
    tickFunction = functionTick;
    timeUpFunction = functionTimeUp;
    setTimeout(runTimer, 1000);
}

function runTimer() {
    counter--;
    if (counter > 0) {
        setTimeout(runTimer, 1000);
        tickFunction(counter);
    } else {
        timeUpFunction();
    }
}

export { startTimer };