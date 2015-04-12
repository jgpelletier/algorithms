var list = { value:null, next:null }


function push (value) {
    var node = { value:value, next:list.next } // this reference points past the dummy node.
    list.next = node
}

// fix dump, no dummy node.

function dump () {
    var node = list
    while (node) {
        if (node.value != null) {
            console.log(node.value)
        }
    node = node.next
    }
}


// build with push.
//var list = { value:null, next:null } // ??? <- list with dummy node.Added {value:null..

// push so that you have 12, 99, 37
//var node = {}
//node.value = 37
//node.next = list
//list = node

//node = {}
//node.value = 99
//node.next = list
//list = node

//node = {}
//node.value = 12
//node.next = list
//list = node

//node = {}
//node.value = null
//node.next = list
//list = node

dump()
push(12)
push(99)
push(37)
dump()
console.log('--- push 5 ---')
push(5)
dump()
console.log('--- push 100---')
push(100)
dump()
