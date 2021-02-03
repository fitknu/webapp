const DomParser = require('dom-parser')
const fs = require('fs')
// const parseData = require('./eParse')
const data = fs.readFileSync("plan.html").toString()
// console.log(data.slice(0, 10))

function parsePlan(data)
{
    const out = []
    const parser = new DomParser()
    const doc = parser.parseFromString(data)
    const table = doc.getElementById('disciplines')

    //get all the rows, transform HTMLcollection to array, 
    //and slice the first two rows, since they are just headers
    const rows = [...table.getElementsByTagName('tr')].slice(2)

    rows.forEach(row =>
    {
        const cells = row.getElementsByTagName('td')

        const number = cells[0].textContent
        const name = cells[1].textContent
        const helpLink = cells[1].getElementsByTagName('a').length === 0 ?
            null : cells[1].getElementsByTagName('a')[0].getAttribute('href')
        const ECTS = cells[2].textContent
        const NationalKR = cells[3].textContent || null
        const HoursAll = cells[4].textContent
        const HoursLecture = cells[5].textContent || null
        const HoursPractice = cells[6].textContent || null
        const HoursSeminar = cells[7].textContent || null
        const HoursLabs = cells[8].textContent || null
        const HoursEnd = cells[9].textContent || null
        const isExam = cells[10].textContent !== ''
        const isZalik = cells[11].textContent !== ''
        const isKP = cells[12].textContent !== ''
        const isKor = cells[13].textContent !== ''
        const kafedra = cells[14].textContent
        const fileLinkEnd = cells[15].getElementsByTagName('a')[0].getAttribute('href')
        const fileLink = `http://asu.knu.edu.ua${fileLinkEnd}`
        // console.log(fileLink)
        const lesson = {
            number, name, helpLink,
            ECTS, NationalKR, HoursAll,
            HoursLecture, HoursPractice, HoursSeminar,
            HoursLabs, HoursEnd, isExam, isZalik,
            isKP, isKor, kafedra, fileLink
        }
        out.push(lesson)
    })
    return out
}
const out = parsePlan(data)
console.log(out)
fs.writeFileSync("plan.json", JSON.stringify(out))