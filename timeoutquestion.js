let intervalcount = 0;
let timeoutcount = 0;

function intervalFunction(){

    intervalcount++;
    console.log(`Interval Tick: ${intervalcount}`);
    if(intervalcount == 5){
        clearInterval(intervalId);
    }
}

function timeoutFunction() {
    timeoutcount++;
    console.log(`Timeout tick ${timeoutcount}`);
    if(timeoutcount == 3){
        clearTimeout(timeoutId);
    }
}

let intervalId = setInterval(intervalFunction,1000);
let timeoutId = setTimeout(timeoutFunction, 500);
console.log("Start");