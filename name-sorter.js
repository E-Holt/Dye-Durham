// node.js and the included package file system are used for this code
const fs = require('fs')
// Imports the sorting function
const { sortNames } = require('./utils')

// This is using fs to read the given unsorted names file, splitting the name list into sub-strings 
// of each name and creating an array from the sub-strings
const sortedNames = sortNames(fs.readFileSync('unsorted-names-list.txt', 'utf8').split('\n'))

// Shows the sorted names to the screen
console.log (sortedNames.join('\r\n'))

// This takes the sortedNames array and makes it into a string with each name on a new line
const data = sortedNames.join('\r\n')

// This makes a new file/updates existing file with the data from the sortedNames string
fs.writeFileSync('./sorted-names-list.txt ', data, (err) => {     
  // In case of a error throw err.
  if (err) throw err;
})