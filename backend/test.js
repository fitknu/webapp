const data = [
  { date: '29.05.2021"' },
  { date: '10.01.2021' }
]

const sort = require('./eSort')
sort(data, 0, data.length - 1)
const vas = [4, 1, 0, 3, 2]
// sort(vas, 0, vas.length-1)
console.log(data);
const fs = require('fs')
fs.writeFileSync("data2.json", JSON.stringify(data))