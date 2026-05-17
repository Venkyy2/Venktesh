setTimeout(() => {
    console.log("Timeout Done");
}, 5000)

let intervalDetails = setInterval( () => {
    console.log("Interval Done");
},5000)

//We want the setInterval mthd to be stopped after 15sec

setTimeout(() => {
    clearInterval(intervalDetails);
    console.log("Interval Processing Stopped");
},15000)