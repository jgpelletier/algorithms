var string = '"Looking for the Veedon Fleece there."'

string.anchor('Van_Morrison_Quote') //Creates and displays anchor in a document.
console.log('This is the character at index 17:', string.charAt(17))
console.log('This is the unicode value for the character at index 17:', string.charCodeAt(17))
console.log(string.concat(' This is a line from "You Don\'t Pull No Punches, But You Don\'t Push the River."'))
console.log('The index of Fleece is:', string.indexOf("Fleece")) //returns the index within the calling
                                                                 //string object of the first occurance
console.log('The index of the last \'the\':',string.lastIndexOf("the"))

console.log(string)// locale compare
console.log(string)// string.match(regexp)
console.log(string)// string.replace(regexp|substr, newSubStr|function)
console.log(string)// string.search(regexp)
console.log(string.slice(1,16))//extracts a section of a string.
console.log(string.split(' '))//splits a string object into an array of strings
console.log(string.substr(17,13))
console.log(string.substring(17,23))
console.log(string.substring(23,17))
console.log(string.toLowerCase())//The method returns the calling string value to converted to lowercase.
console.log(string.toLocaleLowerCase())//Like above, but returns according to locale-specific case mappings
console.log(string.toUpperCase())//returns the calling string value to converted to the uppercase.
console.log(string.toLocaleUpperCase())//Like above, but returns according to locale-specific case mappings.
console.log(string.toString())//returns a string representing the specified object.
console.log("Strips white space from both sides of string: ", string.trim())//returns the string stripped of whitespace from both ends.
console.log("Returns the primitive value: ", string.valueOf())//returns the primitive value of a String object as a string data type.
