var stack = function () {
    var array = [],
         index = -1;

    return {
        push: function (value) {
            array[index += 1] = value
        },
        pop: function () {
            var value = array[index];
            if (index >= 0) {
                index -= 1
            }
            return value
        },
        isEmpty: function () {
            return index < 0
        }
    }
}();

//var stack = stackMaker()

console.log(stack.isEmpty())
stack.push('What')
console.log(stack.pop())
stack.push('up')
console.log(stack.pop())
stack.push('dog?')
console.log(stack.pop())
console.log(stack.isEmpty())
