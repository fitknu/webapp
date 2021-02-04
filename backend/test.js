const fetch = require('node-fetch')
const fs = require('fs')
async function main()
{
    const res = await fetch('https://synchsmthome.000webhostapp.com/index.php?group=%D0%86%D0%9F%D0%97-19%20-1')
    const t = await res.text()
    // console.log(t)
    fs.writeFileSync("test.html", JSON.stringify(t))
}
main()