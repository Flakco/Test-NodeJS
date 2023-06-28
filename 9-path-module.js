const path = require('path');

console.log(path.sep)

const filePath = path.join('/MainFolder', 'SubFolder', 'content.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, __filename)
console.log(absolute)