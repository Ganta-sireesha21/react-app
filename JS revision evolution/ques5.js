function createCountdown(seconds, onTick, onComplete) {
    let remainingSeconds = seconds;
    let timer=null;
    let paused=false;
    function start() {
        if (timer) return;
        timer = setInterval(() => {
            if (!paused) {
                onTick(remainingSeconds);
                remainingSeconds--; 
            }
            if (remainingSeconds < 0) {
                clearInterval(timer);
                timer = null;
                onComplete();
            }
        }, 1000);
    }
    function pause() {
        paused = true;
    }
    function resume() {
        paused = false;
    }
    return { start, pause, resume };
}
const countdown = createCountdown(5,
    (time)=>console.log(time),
    ()=>console.log("Countdown completed")
);
countdown.start();
setTimeout(() => countdown.pause(), 2000);
setTimeout(() => countdown.resume(), 4000);