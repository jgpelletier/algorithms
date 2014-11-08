// no element contains `'\n'` <- that's a rule.
// a missing newline at the end of file is an annoyance, you do not have to
// preserve it.
// arrays of lines.
// [ 'a', 'b', 'c' ] -> 'a\nb\nc\n'
process.stdout.write('here are the elements in [ "a", "b", "c" ]:\n')
process.stdout.write('a\nb\nc\n')


process.stdout.write('here are the elements in []:\n')
process.stdout.write('') // <- this should write an empty string.
process.stdout.write('here are the elements in [ "" ]:\n')
// what should go here? Following the pattern, each string in the array should have a newline.
process.stdout.write('\n')


process.stdout.write('here are the elements in [ "i", "j" ]:\n')
process.stdout.write('i\nj\n')
