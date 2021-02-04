// import getPlan from "./getPlan"
const getPlan = require('./getPlan')
const parsePlan = require('./parsePlan')
const fs = require('fs')
async function main()
{
    const text = await getPlan(1, 1, 1)
    const data = parsePlan(text)
    fs.writeFileSync("plan.json", JSON.stringify(data))
}
main()