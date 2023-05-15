function timer(total_length) {
    const time = new Date();
    const convert = (s) => s < 60 ? `${parseFloat(s).toFixed(2)}secs` : `${parseFloat(s / 60).toFixed(2)}mins`
    return {
        calculate: current => {
            let currentTime = new Date();
            let remainingTasks = total_length - current;
            let seconds = (currentTime.getTime() - time.getTime()) / 1000;
            let remainingTime = (remainingTasks * seconds) / current
            console.log(`Time elapsed:${convert(seconds)}, Time Remaining: ${convert(remainingTime)}`);
        }
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms))
async function run() {
    const total = 10000
    const t = timer(total)
    for (let i = 1; i <= total; i++) {
        await delay(1)
        t.calculate(i)
    }
}
run()