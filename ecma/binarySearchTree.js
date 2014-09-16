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

function insertion (node, valueObject) {
    var head  = node
    var prev = node
    var userNode = { object: valueObject }
/*
    if (a > b) {
        if 
    // look to travel and visit. I need the previous node. it is the parent.
*/
    //var y
    //var x = node
    
    while (node) {
        var prev = node
        if (node.object.city > userNode.object.city)  node = node.left
        else node = node.right
    }

    if (!prev) {
        return valueObject
    } else if (prev.object.city > userNode.object.city) {
        prev.left = userNode
    } else {
        prev.right = userNode
    }
    //head.east = prev
    return head 

}

function deletion (node, value) {

}

exports.search = search
exports.minValue = minValue
exports.maxValue = maxValue
exports.insertion = insertion
exports.deletion = deletion
