const { default: axios } = require('axios')
async function getData(age, groupId)
{
  try
  {
    const currDate = new Date()
    const day = currDate.getDate()
    const month = currDate.getMonth() + 1
    const year = currDate.getFullYear()

    const nextDate = new Date()
    nextDate.setDate(currDate.getDate() + 140)

    const nextDay = nextDate.getDate()
    const nextMonth = nextDate.getMonth() + 1
    const nextYear = nextDate.getFullYear()

    const params = {
      "TimeTableForm[faculty]": "5", //FIT faculty
      "TimeTableForm[course]": `${age}`,
      "TimeTableForm[group]": `${groupId}`,
      "TimeTableForm[date1]": `${day}.${month}.${year}`,
      "TimeTableForm[date2]": `${nextDay}.${nextMonth}.${nextYear}`,
      "TimeTableForm[r11]": "5", //no idea what this is, but it needs to be here
      "timeTable": "0" //no idea
    }
    const querryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')

    const ip = "http://asu.knu.edu.ua/timeTable/group"
    // const res = await node_fet(ip, {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: querryString
    // })
    //TODO make this use node-fetch
    const res = await axios(ip, {method: "POST", data: querryString})
    const respon = res.data
    // console.log(res);
    // const data = res.text()
    return respon

  }
  catch (err) {
    console.error(err)
  }
}
module.exports = getData