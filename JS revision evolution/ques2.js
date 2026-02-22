function createRateLimiter(limit, interval) {
    let count = 0;
    setInterval(() => {
        count = 0; // Reset the count after the specified interval
    }, interval);
    return function() {
        if (count < limit) {
            count++;
            console.log("Request allowed");
        } else {
            console.log("Rate limit exceeded. Please try again later.");
        }
    };
}
const rateLimiter = createRateLimiter(5, 10000); 
for (let i = 0; i < 10; i++) {
    rateLimiter();
}