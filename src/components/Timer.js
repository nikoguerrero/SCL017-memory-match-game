
let counter = 30;
let tickFunction = null; // será convertido en función
let timeUpFunction = null; // será convertido en función
let shouldTimerStop = false;

//comienza el timer
function startTimer(functionTick, functionTimeUp) {
    shouldTimerStop = false;
    counter = 30;
    tickFunction = functionTick;
    timeUpFunction = functionTimeUp;
    setTimeout(runTimer, 1000);
}

//hace correr el timer 
function runTimer() {
    if(shouldTimerStop === false) {
        if (counter  === 0) {
        timeUpFunction();
        } else {
        counter--; 
        setTimeout(runTimer, 1000);
        tickFunction(counter);
        }
    }
}

//detiene el timer
function stopTimer(){
  shouldTimerStop = true;
}
export { startTimer, stopTimer };