// what does a "stop" object look like? define only kalamazoo.
var string = "Kalamazoo Transportation, Kalamazoo, Michigan"
//var kalamazoo = { station: "Kalamazoo Transporation",  city: "Kalamazoo", state: "Michigan" }
var str = string
function station (string) {
    var string =  string.split("\,")
    return string
}

console.log(typeof station(string), station(string).constructor.name)
string = station(string)
console.log(string.toString())
console.log(string.toString() == str) //These are equal
console.log(string.toString() == string)
