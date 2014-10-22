// Why is this unhelpful?
; (function () {
    var e = new Error('unhelpful')

    function unhelpful (count) {
        if (count == 0) {
            throw e
        } else {
            unhelpful(count - 1)
        }
    }

    try {
        unhelpful(10)
    } catch (e) {
        console.log(e.stack)
    }
    console.log('Everything went swimingly.')
})()

var storage = {}

function smedley () {
    // `badness` will never return `'goodness'`.
    function badness (count) {
        if (count == 0) {
            throw new Error('badness')
            return 'goodness' // <- not gonna happen.
        } else {
            return badness(count - 1)
        }
        return 'goodness' // <- not gonna happen.
    }

    // this unwinds stack, ends program:
    // badness(10)

    try {
        badness(12)
        console.log('!!!!! Everything went swimmingly.')
    } catch (e) {
        console.log(e.stack)
    }
    console.log('Everything went swimingly.')

    var stackTraceLimit = Error.stackTraceLimit
    Error.stackTraceLimit = Infinity

    // If try ends, we procede.
    // If catch ends, we procede.
    try {
        badness(12)
        // from here we go to ...
    } catch (e) {
        console.log(e.stack)
        // from here we go to ...
    }
    // ... here from try or catch.
    // How is this environment different?
    console.log('Everything went swimingly.')
    // ^^^ why is this called?

    Error.stackTraceLimit = stackTraceLimit

    function willcatch (count) {
        try {
            badness(count)
        } catch (e) {
            // We start moving forward again from HERE.
            console.log(e.stack)
        }
        // No more forward motion because of enviroment.
        console.log('Everything went swimingly.')
    }

    try {
        willcatch(10)
        console.log('Everything went swimingly.')
    } catch (e) {
        console.log('JOSH IS RIGHT!')
    }

    function rethrow (count) {
        try {
            try {
                badness(count)
            } catch (e) {
                // We start moving forward again from HERE.
                console.log(e.stack)
                throw e
            }
        } catch (e) {
            throw e
        }
        console.log('Everything went swimingly.')
    }

    try {
        rethrow(10)
        console.log('Everything went swimingly.')
    } catch (e) {
        console.log(e.stack)
        console.log('JOSH IS RIGHT!')
    }

    Error.stackTraceLimit = Infinity

    function cleanup (count) {
        storage[1] = 'value' // <- allocate.
        try {
            badness(count)
        } finally {
            // Always be called, run regardless.
            // Unwinding stack is paused to run finally.
            // Normal operation, finally is laso.
            delete storage[1] // <- free.
            console.log('FINALLY!')
        }
        console.log('Everything went swimingly.')
    }

    try {
        cleanup(3)
        console.log('Everything went swimingly.')
    } catch (e) {
        console.log(e.stack)
        console.log('JOSH IS RIGHT!')
    }

    try {
        console.log('Hello, Josh.')
    } catch (e) {
        console.log(e.stack)
    }

    console.log('We are done.')

    try {
        badness(10)
    } catch (e) { } // <- I am in hell.

    try {
        badness(10)
    } catch (e) {
        // I did this because API provider Tuffy Muffer Repair created an API
        // that does this astoundingly stupid thing. Grab some popcorn and read
        // on.... (Then explain yourself.)
    }
}

function log (message) {
    try {
        // Actually tidy message and elide sensitive data.
        tidyMessage(message)
    }  catch (e) {} // <- because we always want to log, even an untidy message.
        // HE IS WRONG!
    write(message) // 2018, why are none of our messages tidy?
}


smedley()

setImmediate(function () {
    function badness (count) {
        if (count == 0) {
            throw new Error('badness')
        } else {
            return badness(count - 1)
        }
    }

    // this unwinds stack, ends program:
    // badness(10)

    try {
        badness(3)
    } catch (e) {
        console.log(e.stack)
    }
    console.log('Everything went swimingly.')
})

try { // <- on the "main" stack
    setImmediate(/* <- time warp! -> */function () {
        throw new Error('won\'t catch') // <- on a subsequent stack
    })
} catch (e) {
    console.log(e.stack)
}
