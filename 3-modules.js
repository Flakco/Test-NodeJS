// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { Wolf, Merry } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-other');

/* console.log(data.singlePerson.name)
console.log(Wolf,Merry)

sayHi(Wolf)
sayHi(Merry) */

require('./7-test')