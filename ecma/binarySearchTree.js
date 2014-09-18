function search (node, city) {
    if (node == null || node.object.city == city) {
        return node.object
    }
    
    if (city < node.object.city) {
        return search(node.left, city)
    } else { 
        return search(node.right, city)
    }

}

function minValue (node) {
    if (!node.left) { 
        return node.object
    } else {
        return minValue(node.left)
    }
}

function maxValue (node) {
    if (!node.right) {
        return node.object
    } else {
        return maxValue(node.right)
    }
}


// try to do this recursively as well.
function insertion (node, valueObject) {
    var head  = node
    var prev = node
    var userNode = { object: valueObject }
    
    while (node) {
        var prev = node
        if (node.object.city > userNode.object.city)  node = node.left
        else node = node.right
    }

    if (!prev) {
        return userNode
    } else if (prev.object.city > userNode.object.city) {
        prev.left = userNode
    } else {
        prev.right = userNode
    }
    return head 

}
//function transplant () {} 

function find (node, value) {
    while (node && node.object.city != value) {
        prev = node
        if (node.object.city > value) node = node.left
        else node = node.right
    }
}

function transplant ( head, prev, node, nextNode ) {
    if (!prev) {
        head = nextNode
    }
    else if (prev.left == node) { // is this branch ever entered for a node with 2 children?
        prev.left = nextNode
    } else {
        prev.right = nextNode // this is the node that is supposed to go next.
                              // the question becomes how do I attach the right 
                              // branches to this node and where should that be done?
    }

    if (node.right && node.left) { // this tests for 2 children
        if (node.right == nextNode) { // checks if min is the right node
            nextNode.right = node.right.right
        } else {
            node = deletion(node, nextNode.object.city)
            nextNode.right = node.right
            nextNode.left = node.left
           
        }   
    }

    return head
}

function deletion (node, value) {
    var head  = node
    var prev = node

    while (node && node.object.city != value) {
        prev = node
        if (node.object.city > value) node = node.left
        else node = node.right
    }

    if (!node.left) {
        return transplant( head, prev, node, node.right )
    } 
    else if (!node.right) {
        return transplant( head, prev, node, node.left )
    } else {
        var y = minValue(node.right)
        y = { object:y } 
        //console.log(y)
        if ( node.right.object.city != y.object.city ) {
            head = transplant( head, prev, node, y )
            // How do I make chicago point at jackson, jackson take on the dowagic branch
            // and keep kalamazoo while dumping the jackson on the kalamazoo branch?
           // y.left = node.left
           //prev.right = y
        }

        //y.right = node.right.right || null // y branch
        //y.left = node.left
        //head = transplant(head, prev, y, node.right) // <-- this doens't add all the necesary values
        //y.left = node.left
       // console.log(y)
        //y.right = node.right.right
        //prev.right = y
    }
    return head
}

exports.search = search
exports.minValue = minValue
exports.maxValue = maxValue
exports.insertion = insertion
exports.deletion = deletion
