function inc (number) {
    return number + 1
}

var number = inc(2)

console.log(number)

function inker (number) {
    return function () {
        return number + 1
    }
}

var number = inker(2)

console.log(number) // <- 3
