function strip(data)
{
  //start with at least a week of data
  let last = 6
  for (let i = 0; i < data.length; i += 7)
  {
    //Go throught each day in a week
    for (let j = i; j < Math.min(i + 7, data.length); j++)
    {
      //If any day in a week has at least one lesson,
      // we add the whole week
      if (data[j].lessons.length > 0)
      {
        last = i + 6;
        break
      }
    }
  }
  
  return data.slice(0, Math.min(data.length, last + 1))

  // let last = 0
  // for (let i = 0; i < data.length; i++)
  // {
  //   if (data[i].lessons.length > 0)
  //   {
  //     last = i
  //   }
  // }
  // return data.slice(0, last + 1)
}
module.exports = strip