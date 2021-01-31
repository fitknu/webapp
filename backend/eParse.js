const DOMParser = require('dom-parser')
function parseData(data)
{
  try
  {
    const response = []
    const parser = new DOMParser()
    const doc = parser.parseFromString(data)
    const table = doc.getElementById('timeTableGroup')
    const rows = table.getElementsByTagName('tr')
    rows.forEach(row =>
    {
      const tds = row.getElementsByTagName('td')
      const dayOfWeek = tds[0].childNodes[1].textContent
      const startTime = tds[0].childNodes[2].textContent[0]
      for (let i = 1; i < tds.length; i++)
      {
        const td = tds[i]
        const cells = td.getElementsByClassName('cell')
        const date = td.childNodes[1].textContent
        if (date === '')
        {
          continue
        }
        // response[date] = { startTime, lessons: [] }
        response.push({date, dayOfWeek, startTime, lessons: []})

        cells.forEach((cell, cellIndex) =>
        {
          if (cell.getAttribute('data-content'))
          {
            /**@type {String} */
            const dataContent = cell.getAttribute('data-content').replace('&#039;', "'") //replace becase of "'" in Ukrainian language
            const reg = /((?<=<br>\s|<br>)(.*)(?=<br>\s))/gm
            const matches = dataContent.match(reg) //just taking the long name and the long teacher name from a string
            const nameLong = matches[0]
            const teacherLong = matches[3]
            const dataDiv = cell.getElementsByTagName('div')[0]
            const name = dataDiv.childNodes[1].textContent
            const fullPlace = dataDiv.childNodes[3].textContent.trim()
            const place = fullPlace.slice(0, fullPlace.indexOf('_'))
            const teacher = dataDiv.childNodes[5].textContent.trim()
            const time = parseInt(startTime) + cellIndex
        
            response[response.length-1]['lessons'].push({time, name, place, teacher, nameLong, teacherLong})
            // response[date]['lessons'].push({ time, name, place, teacher })
          }
        })
      }
      
    })
    return response
  }
  catch (err)
  {
    console.error(err)
  }
}
module.exports = parseData