console.log(true)
console.log(! true)
console.log(! false)
console.log(!! false)
console.log(! null)

if (null) {
    console.log('null is truthy')
}  else {
    console.log('null is falsey')
}

if (0) {
    console.log('0 is truthy')
} else {
    console.log('0 is falsey')
}

if (1) {
    console.log('1 is truthy')
} else {
    console.log('1 is falsey')
}

if (-1) {
    console.log('-1 is truthy')
} else {
    console.log('-1 is falsey')
}

if ('x') {
    console.log('"x" is truthy')
} else {
    console.log('"x" is falsey')
}

if ('') {
    console.log('"" is truthy')
} else {
    console.log('"" is falsey')
}

if ('0') {
    console.log('"0" is truthy')
} else {
    console.log('"0" is falsey')
}

if ('0') {
    console.log('"0" is truthy')
} else {
    console.log('"0" is falsey')
}

var object = null

if (object) {
    console.log('truthy')
} else {
    console.log('falsey')
}
