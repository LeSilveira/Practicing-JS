// RUNNING A FUNCTION FOR A DETERMINED AMOUNT OF TIME, REPEATING EVERY DETERMINED AMOUNT OF MILLISECONDS
/*function everyXsecsForYsecs(func, whenRepeat, untilWhen) {
    var time = 0;
    const id = setInterval(() => {
        time += whenRepeat;
        if (time <= untilWhen){
            func();
        }else{
            clearInterval(id);
            console.log('This is the end!');
        }
    }, whenRepeat)
}

everyXsecsForYsecs(() => console.log('Hi'), 1000, 5000);*/

// COUNT TO A GIVEN NUMBER WAITING A DETERMINED AMOUNT OF TIME BETWEEN EACH NUMBER
/*function delayCounter(target, wait) {
    var counter = 1;

    const func = function () {
        const printValue = function () {
            if (counter !== target+1) {
                console.log(counter);
                counter++;
            } else {
                clearInterval(id);
            }
        }

        var id = setInterval(printValue, wait);
    }
    return func;
}

const globalFunc = delayCounter(28, 1000);
globalFunc();*/

// PROMISE SIMPLE HANDLING
/*async function promised(value){
    return value;
}

promised(2).then((value) => setTimeout(() => console.log(value), 2000))*/


// 'SECONDS CLOCK' CLASS DEFNITION AND TESTING
/*class SecondClock {
    constructor(callback) {
        this.callback = callback;
        this.seconds = 0;
        this.clockId = 0;
    }

    start() {
        if (this.clockId !== 0) {
            console.log('The clock is already running, first reset it!')
        } else {
            console.log('Clock has been started!')
            this.clockId = setInterval(() => {
                this.seconds++;
                if (this.seconds > 60) { this.seconds = 1; }
                this.callback(this.seconds);
            }, 1000);
        }
    }

    reset() {
        console.log('Clock has been stopped!');
        clearInterval(this.clockId);
        this.seconds = 0;
        this.clockId = 0;
    }
}

const clock = new SecondClock(val => console.log(val));
clock.start();
setTimeout(() => {
    clock.start();
    setTimeout(() => {
        clock.reset();
        clock.start();
    }, 6000);
}, 10000);*/


// MAKES A FUNCTION AVAILABLE TO BE EXECUTED ONLY AFTER A DEFINED TIME HAS PASSED SINCE IT LAST RAN, RESETING THE TIMER EVEN ON FAILED ATTEMPTS TO RUN IT
/*function debounce(func, afterHowManyTime) {
    var canRun = true;
    var id = 0

    return function () {
        if (canRun === true) {
            func();
            canRun = false;
        } else {
            clearTimeout(id);
            console.log('Not able to run the function yet, wait 5 seconds!')
        }

        id = setTimeout(() => canRun = true, afterHowManyTime);
    }
}

const runFunc = debounce(() => console.log('Running function!!'), 5000);
runFunc()
setTimeout(runFunc, 2000);
setTimeout(runFunc, 6000);
setTimeout(runFunc, 12000);*/