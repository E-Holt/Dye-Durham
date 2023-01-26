// This function is the sorting function, it takes one argument which is the created array from the names, and returns another function
function sortNames(namesArgument) {
  // This function takes two arguments, which will be two of the names from the created array, and sorts them with the following logic
  return namesArgument.sort((personOne, personTwo) => { 
    //These lines split two names into sub-arrays by their spaces
    const personOneSplit = personOne.split(" ")
    const personTwoSplit = personTwo.split(" ")
    // These lines pop off the last name from the name sub-arrays to be sorted by itself
    const oneLastName = personOneSplit.pop()
    const twoLastName = personTwoSplit.pop()
    // These lines join the first and middles names together again
    const oneFirstNames = personOneSplit.join()
    const twoFirstNames= personTwoSplit.join()

    // These if/else statements compare one popped off last name against another, sorting based on alphabetical order
    if(oneLastName < twoLastName) return -1
    else if(oneLastName > twoLastName) return 1
    else if (oneLastName === twoLastName) 0
    // These if/else statements sort the first/middle name sub-arrays by their alphabetical order after the last name has been sorted
    if(oneFirstNames < twoFirstNames) return -1
    else if(oneFirstNames> twoFirstNames) return 1
    else return 0
  })
}

// Export sortNames function
module.exports = { sortNames }
