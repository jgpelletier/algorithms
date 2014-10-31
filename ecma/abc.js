// no element contains `'\n'` <- that's a rule.
// a missing newline at the end of file is an annoyance, you do not have to
// preserve it.
// arrays of lines.
// [ 'a', 'b', 'c' ] -> 'a\nb\nc\n'
// [ 'a' ] -> 'a\n\n\n\n'
// [] -> '\n'
// ^^^ what makes you think there are going to be five empty lines?
// ^^^ why aren't their five empty lines?
process.stdout.write('here are the elements in [ "a", "b", "c" ]:\n')
process.stdout.write('a\nb\nc\n')


process.stdout.write('here are the elements in []:\n')
//process.stdout.write('\n') // <- this should not be here
process.stdout.write('here are the elements in [ "" ]:\n')
// what should go here? Following the pattern, each string in the array should have a newline.
process.stdout.write('\n')


process.stdout.write('here are the elements in [ "i", "j" ]:\n')
process.stdout.write('i\nj\n')
