const parseData = require('./eParse')
const getData = require('./eGetData')
const sort = require('./eSort')
const strip = require('./eStrip')
const fs = require('fs')
async function main()
{
  const data = await getData()
  const next = parseData(data)
  // return {body: next}
  sort(next, 0, next.length-1)
  const done = strip(next)
  fs.writeFileSync('data.json', JSON.stringify(done))
  // const data = [54,12,41]
  // const next = sort(data, 0, data.length-1)
  // console.log(data);
}

global.main = main
main()