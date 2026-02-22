function mySetInterval(callback, delay) {
    let timerId;
    function repeat() {
        timerId = setTimeout(() => {
            callback();
            repeat();
        }, delay);
    }
    repeat();
    return function clearMyInterval() {
        clearTimeout(timerId);
    };
}
const stop=mySetInterval(() => {
    console.log("running");
}, 1000);
setTimeout(() => {
    stop();
    console.log("stopped");
}, 5000);

