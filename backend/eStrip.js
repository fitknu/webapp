function strip(data)
{
  let last = 0
  for (let i = 0; i < data.length; i++)
  {
    if (data[i].lessons.length > 0)
    {
      last = i
    }
  }
  return data.slice(0, last+1)
}
module.exports = strip