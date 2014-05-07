var string = "Kalamazoo Transportation, Kalamazoo, Michigan"
// spacing
var kalamazoo = { station: "Kalamazoo Transporation",  city: "Kalamazoo", state: "Michigan" }
var str = string

function station (string) {
   string = string.split(",")
   // eliminate variable.
   var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim() }
   return object
}


console.log("string pre-station call is a:", typeof string)
console.log("Is string an array test:", Array.isArray(string)) //evaluates false
console.log("str pre- station call is an:", typeof str) //typeof is string
console.log("Is str an array test:", Array.isArray(str)) //evaluates false
console.log("------Station function called-------")
console.log(typeof station(string), station(string).constructor.name)
string = station(string)
console.log("Is string an array test:", Array.isArray(string)) //evaluates true
console.log("string post station call is an:", typeof string) //typeof is an object
console.log("str post-station call is an:", typeof str) //typeof is string
console.log("Is str an array test:", Array.isArray(str)) //evaluates false
console.log(string)
console.log(kalamazoo)

// At one point in this code, there was a backslash proceeding line six's comma.
// This was an incorrect use of the character. A backslash is used as an escape
// charaecter in order to invoke an alternative interpretation on the subsequent
// characters in a character sequence.

// Here are some of JavaScripts escape sequences:
//  \b  backspace
//  \t  tab
//  \n  line feed
//  \v  vertical tab
//  \f  form feed
//  \r  carriage return
//  \"  double quotation mark
//  \'  single quotation mark
//  \\  backslash
//  \u  unicode escape syntax
