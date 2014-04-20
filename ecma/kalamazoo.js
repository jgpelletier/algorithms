// what does a "stop" object look like? define only kalamazoo.
var string = "Kalamazoo Transportation, Kalamazoo, Michigan"
var kalamazoo = { station: "Kalamazoo Transporation",  city: "Kalamazoo", state: "Michigan" }
var str = string

function station (string) {
   string = string.split(",") //The backslash is an excape character. It was unecessary before the comma.
   var object = {}
   object.station = string[0]
   object.city = string[1]
   object.state = string[2]
   return object
}


console.log("string pre-station call is a:", typeof string)
console.log("Is string an array test:", Array.isArray(string)) //evaluates false
console.log("str pre- station call is an:", typeof str) //typeof is string
console.log("Is str an array test:", Array.isArray(str)) //evaluates false
console.log("------Station function called-------")
//console.log(typeof station(string), station(string).constructor.name)
string = station(string)
console.log("Is string an array test:", Array.isArray(string)) //evaluates true
console.log("string post station call is an:", typeof string) //typeof is an object
console.log("str post-station call is an:", typeof str) //typeof is string
console.log("Is str an array test:", Array.isArray(str)) //evaluates false
console.log(string) //The properties in string have spaces that must be trimmed.
console.log(kalamazoo)

//Escape Sequences:
//  \b  backspace
//  \t  tab
//  \n  line feed
//  \v  vertical tab
//  \f  form feed
//  \r  carriage return
//  \"  double quotation mark
//  \'  single quotation mark
//  \\  backslash
