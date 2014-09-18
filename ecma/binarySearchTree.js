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


function depth (node) {
    if (!node) {
        return 0
    } else {
    var lDepth = depth(node.left)
    var rDepth = depth(node.right)

    if (lDepth > rDepth) return(lDepth+1)
    else return (rDepth+1)
    }
}


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
    else if (prev.left == node) {
        prev.left = nextNode
    } else {
        prev.right = nextNode
    }

    if (node.right && node.left) { // this tests for 2 children
        if (node.right == nextNode) { // checks if min is the right node
            nextNode.right = node.right.right
        } else {
                // vvv call deletion function to remove duplicate node from branch
            node = deletion(node, nextNode.object.city)
            // ^^^ QUESTION: Is this inefficient considering the function adds more stackframes,
            //               and this is the about the 3rd time of traveling down to a node?
            nextNode.right = node.right
            nextNode.left = node.left
           
        }   
    }

    return head
}

function deletion (node, value) {
    var head  = node
    var prev = node
    
    // finds the node to be deleted.
    while (node && node.object.city != value) {
        prev = node
        if (node.object.city > value) node = node.left
        else node = node.right
    }
    
    // cases
    if (!node.left) {
        return transplant(head, prev, node, node.right)
    } 
    else if (!node.right) {
        return transplant(head, prev, node, node.left)
    } else {
                            // vvv function to find the min 
        var min = { object: minValue(node.right) } 

        // tests if the min is the right child or within the branch.
        if (node.right.object.city != min.object.city) {
            return transplant(head, prev, node, min)
        }

        return transplant(head, prev, node, min)
    }
}

exports.search = search
exports.minValue = minValue
exports.maxValue = maxValue
exports.insertion = insertion
exports.deletion = deletion
exports.depth = depth
