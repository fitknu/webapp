const asu = require('./asu.json')

const getData = require('./eGetData')
const parseData = require('./eParse')
const sort = require('./eSort')
const strip = require('./eStrip')
const fetch = require('node-fetch').default

// const fs = require('fs')
async function main()
{
  try 
  {

    // const IP = 'https://got_schedule.knu.workers.dev/'
    // const IP = "https://synchsmthome.000webhostapp.com"
    const IP = "https://synchsmthome.000webhostapp.com/index.php"
    console.time("ajax")
    const out = {}
    const age = 4
    const namesOfGroups = Object.keys(asu.ages[age])
    await new Promise((resolve, reject) =>
    {
      let counter = 0
      namesOfGroups.forEach(async groupName =>
      {
        const groupId = asu.ages[age][groupName]
        const rawData = await getData(age, groupId)
        const parsedData = parseData(rawData)
        sort(parsedData, 0, parsedData.length - 1)
        const strippedData = strip(parsedData)

        const body = {
          age,
          group: groupName,
          schedule: strippedData,
          pass: "iamreadyforrevolution"
        }
        out[groupName] = strippedData
        // const response = {}
        // const res = await fetch(IP, { headers: {"Content-type": "application/json"}, method: "POST", body: "JSON.stringify(body)" })
        const response = ""// await res.text()
        if (response !== "great")
        {
          console.log(response)
          console.log(`Failed ${groupName}`)
        } else 
        {
          console.log(`${groupName} done`);
        }
        counter++
        if (counter === namesOfGroups.length)
        {
          resolve("Done")
        }
      })
    })
    console.timeEnd('ajax')
    fs.writeFileSync(`age${age}.json`, JSON.stringify(out))
  } catch (e)
  {
    console.log(`Problem: ${e}`)
  }

}
global.main = main
main()