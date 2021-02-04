const fetch = require('node-fetch')
async function getPlan(age, group, time)
{
    const params = {
        "FilterForm[faculty]": "5",
        "FilterForm[speciality]": "13",
        "FilterForm[course]": "2",
        "FilterForm[group]": "704",
        "FilterForm[semester]": "4350",
    }
    const IP = "http://asu.knu.edu.ua/workPlan/speciality"

    const querryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')
    const response = await fetch(IP, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: querryString
    })
    const text = await response.text()
    return text
}
module.exports = getPlan