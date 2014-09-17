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
function transplant ( head, prev, node, nextNode) {
    if (!prev) {
        head = nextNode
    }
    else if (prev.left == node) {
        prev.left = nextNode
    } else {
        prev.right = nextNode
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
        return transplant( head, prev, node, node.right)
    } 
    else if (!node.right) {
        return transplant( head, prev, node, node.left)
    } else {
        var y = minValue(node.right)
        if (prev.right != y) {
        //transplant(head, prev, node, y)
        //prev.left = node.left
        }
        
        prev.right = node.right
        node.right.left = node.left
        

    }
    //head = transplant(head, prev, node)
    return head
}

exports.search = search
exports.minValue = minValue
exports.maxValue = maxValue
exports.insertion = insertion
exports.deletion = deletion
