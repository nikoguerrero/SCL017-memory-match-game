import GameDisplay from './GameDisplay.js'
import intro from './Intro.js';

function timer() {
let secondStart = 30;
document.getElementById('timerDisplay').innerHTML = secondStart;

if(secondStart == 0) {
    document.getElementById('timerDisplay').innerHTML = 'PERDISTE';    
} else{
    secondStart = secondStart -1;
    setTimeout(timer, 1000);
}

}


export default timer;