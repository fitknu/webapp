const fetch = require('node-fetch')
const getData = require('./eGetData')
const fs = require('fs')
const parseData = require('./eParse')
const strip = require('./eStrip')
const sort = require('./eSort')
async function main()
{
    const data = JSON.parse(fs.readFileSync("test.json").toString())
    sort(data, 0, data.length-1)
    const str = strip(data)
    fs.writeFileSync("test1.json", JSON.stringify(str))
}
main()