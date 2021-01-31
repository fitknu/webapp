const asu = require('./asu.json')

const getData = require('./eGetData')
const parseData = require('./eParse')
const sort = require('./eSort')
const strip = require('./eStrip')
const fs = require('fs')

async function main()
{
  console.time("ajax")
  const schedule = { ages: {} }
  const age = 1
  schedule['ages'][age] = {}
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
      schedule['ages'][age][groupName] = strippedData
      console.log(`${groupName} done`);

      counter++
      if (counter === namesOfGroups.length)
      {
        resolve("Done")
      }
    })
  })
  fs.writeFileSync("schedule.json", JSON.stringify(schedule))
  console.timeEnd('ajax')
  // for (let i = 0; false && i < 3; i++)
  // {
  //   const age = 1
  //   const namesOfGroups = Object.keys(asu.ages[age])
  //   const groupName = nameOfGroups[i]
  //   const groupId = asu.ages[age][groupName]
  //   //TODO fix, groupId is undefiend for some reason
  //   const res = await getData(age, groupId)
  //   const data = parseData(res)
  //   sort(data, 0, data.length-1)
  //   const done = strip(data)
  //   // const data = parseData(res)
  //   schedule[groupName] = done
  // }

  // fs.writeFileSync("schedule.json",
  // JSON.stringify(schedule))
}
main()