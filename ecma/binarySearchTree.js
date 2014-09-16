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
function transplant (head, prev, node) {
    if (!node.right) prev.left = node.right
    else if (!node.left) prev.right = node.right 

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
    
    head = transplant(head, prev, node)
    return head
}

exports.search = search
exports.minValue = minValue
exports.maxValue = maxValue
exports.insertion = insertion
exports.deletion = deletion
