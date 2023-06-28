const { readFileSync } = require("fs");

const fs = require('fs');

const content = fs.readFileSync('./MainFolder/SubFolder/content.txt', 'utf-8');
const Lorem = fs.readFileSync('./MainFolder/Lorem.txt', 'utf-8');

console.log(content,'\n',Lorem)

fs.writeFileSync('./MainFolder/SubFolder/new-text.txt', 'Hello world')

console.log('Done with this task')
console.log('Starting the next one')


