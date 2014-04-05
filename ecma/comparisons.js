var object = {
    name: 'value'
}

console.log(object.name) //<- value

var nested = {
    child: {
        name: 'value'
    }
}

console.log(nested.child.name)//<- value

var head = {
    next: null
}

console.log(1 == 1) //<- true
console.log(1 == '1') //<- true
console.log(1 === '1')//<- false
console.log(head.next) //<- null
console.log(head.value) //<- undefined
console.log(head.value == null) //<- true
console.log(head.value === null) //<- false
console.log(head.value === undefined) //<- true
console.log(head.value === (void(0))) //<- true
