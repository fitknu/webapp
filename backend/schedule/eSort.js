function partition(arr, start, end)
{
  let pivot = arr[end]
  let p_index = start
  for (let i = start; i < end; i++)
  {
    const day = parseInt(arr[i].date.slice(0,2))
    const month =  parseInt(arr[i].date.slice(3,5))
    const year = parseInt(arr[i].date.slice(6))
    // // const d1 = new Date(year, month, day)

    const day1 = parseInt(pivot.date.slice(0,2))
    const month1 = parseInt(pivot.date.slice(3,5))
    const year1 = parseInt(pivot.date.slice(6))
    // // const d2= new Date(year1, month1, day1)
    // const tr = (year < year1) || (month < month1) || (day < day1)
    const tr = (year < year1) || ((year === year1) && (month < month1)) || ((year === year1) && (month === month1) && day < day1 )
    if (tr)
    {
      const temp = arr[i]
      arr[i] = arr[p_index]
      arr[p_index] = temp
      p_index++
    }
  }
  const temp = arr[p_index]
  arr[p_index] = arr[end]
  arr[end] = temp
  return p_index
}
function sort(arr, start, end)
{
  if (start < end)
  {
    const pi = partition(arr, start, end)
    sort(arr, start, pi-1)
    sort(arr, pi+1, end)
  }
}
module.exports = sort