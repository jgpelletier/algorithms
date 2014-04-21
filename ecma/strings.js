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
console.log(string)
console.log(string)
console.log(string)
console.log(string)
console.log(string)
