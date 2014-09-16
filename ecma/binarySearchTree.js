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
    var a = node.object.city
    var b = valueObject.city
    var prev = node
/*
    if (a > b) {
        if 
    // look to travel and visit. I need the previous node. it is the parent.
*/
    //var y
    //var x = node
    
    while (!node) {
        var prev = node
        if (a > b)  node = node.left
        else node = node.right
}

function deletion (node, value) {

}

exports.search = search
exports.minValue = minValue
exports.maxValue = maxValue
exports.insertion = insertion
exports.deletion = deletion
