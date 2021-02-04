const fetch = require('node-fetch')
const fs = require('fs')
const DOMparser = require('dom-parser')
async function main()
{
    const d = fs.readFileSync("asuPlan.json").toJSON()
    const names = Object.keys(d.values)
    names.forEach(name =>
    {
        const val = d.values[name]
        const params = {
            "FilterForm[faculty]": "5",
            "FilterForm[speciality]": val,
            "FilterForm[course]": 1
        }
        const querryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')
        const s = "http://asu.knu.edu.ua/workPlan/speciality?"+querryString
        const response = await fetch(s)
        const text = await response.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(text)
        
    })
}