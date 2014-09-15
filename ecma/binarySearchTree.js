

function search (node, value) {
   /* 
    if (node.object[value] ==  value) {
        console.log('value found', return node.)
        */
}

function minValue (node) {
    if (!node.left) { 
         console.log(node.object)
    } else {
        minValue(node.left)
    }
}

function maxValue (node) {
    if (!node.right) {
        console.log(node.object)
    } else {
        maxValue(node.right)
    }
}

function insertion (node, value) {

}

function deletion (node, value) {

}

exports.search = search
exports.minValue = minValue
exports.maxValue = maxValue
exports.insertion = insertion
exports.deletion = deletion
