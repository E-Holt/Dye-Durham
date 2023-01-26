// Jest was used for testing purposes
// Importing the softNames function
const { sortNames } = require('./utils')

// Testing a given array will sort correctly using the sortNames function
describe("sorting functionality", () => {
  test("should be ordered alphabetically by last name then given names", () => {
    const originalArray = ['James Smith', 'Abby Able', 'Abby Babble', 'Abby Able Babble', 'Bob Agon Clint', 'Bob Clint', 'Bob Aaron Clint', 'Aaron Smith'];
    const expectedArray = ['Abby Able', 'Abby Babble', 'Abby Able Babble', 'Bob Clint', 'Bob Aaron Clint', 'Bob Agon Clint',  'Aaron Smith', 'James Smith']

    expect(sortNames(originalArray)).toEqual(expectedArray)
  })
})
