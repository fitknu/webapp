const fetch = require('node-fetch')

async function main()
{
  const body = {
    "age": 2,
    "group": "ИПЗ-20-1",
    "pass": "iamreadyforrevolution",
    "schedule": []
  }
  const IP = 'https://got_schedule.knu.workers.dev'
  try
  {
    const response = await fetch(IP, { method: 'POST', body: JSON.stringify(body) })
    const text = await response.text()
    console.log(text)
  } catch (error)
  {
    console.log(error)
  }
}
main()