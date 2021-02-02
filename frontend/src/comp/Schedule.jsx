import { Container, Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import DayCard from "./DayCard";

function getWeeks(data)
{
  const weeks = new Array(data.length)
  
  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  //make a slice of date, [currentDay, end]
  for (let i = 0; i < data.length; i++)
  {
    const d = parseInt(data[i].date.slice(0, 2))
    const m = parseInt(data[i].date.slice(3, 5))
    const y = parseInt(data[i].date.slice(6))
    if (day === d && month === m && year === y)
    {
      data = data.slice(i)
      break
    }
  }

  //Separate days into weeks
  let weekIndex = -1
  //If the weeks starts with a day other than Monday,
  //start a week here
  if (data.length > 0 && data[0].dayOfWeek !== 'Пн')
  {
    weekIndex = 0
    weeks[0] = []
  }
  data.forEach(entry =>
  {
    if (entry.dayOfWeek === 'Пн')
    {
      weekIndex++
      weeks[weekIndex] = []
    }
    weeks[weekIndex].push(entry)
  })
  return weeks
}

const useStyles = makeStyles(theme => ({
  week: {
    marginBottom: theme.spacing(3)
  }
}))

const useLessons = (data) =>
{
  const colors = {
    pink: '#ff008f26',
    blue: '#0010ff2e',
    orange: '#ff83002e',
    swamp: 'rgba(56, 255, 0, 0.26)',
    // swamp: '#00ff872e',
    lightblue: '#0070ff2e',
    yellow: '#ffff0030',
    red: '#ff18002e',
    purple: '#5000ff2e',
    green: '#00ff282e',
  }
  const colorValues = Object.values(colors)

  const lessonList = new Set()
  data.forEach(day =>
  {
    day.lessons.forEach(lesson =>
    {
      lessonList.add(lesson.name)
    })
  })
  const matrix = {}
  const lessonArr = [...lessonList]
  lessonArr.forEach((lesson, i) =>
  {
    const index = i % colorValues.length
    matrix[lesson] = colorValues[index]
  })
  return matrix
}
function Schedule({ shedule })
{
  const classes = useStyles()
  const [weeks, setWeeks] = useState([])
  // const [matrix, useMatrix]
  useEffect(() => setWeeks(getWeeks(shedule)), [shedule])
  const matrix = useLessons(shedule)
  return (
    <Container>
      <Grid
        container
        justify="center"
        spacing={2}
      >
        {weeks.map(week =>
        {
          return <Grid
            key={`w-${week[0].date}`}
            className={classes.week}
            container
            item
            spacing={2}
            xs={12}>
            {week.map(day =>
            {
              return <Grid key={day.date} item xs={12} sm={6} md={4} lg={3}>
                <DayCard matrix={matrix} day={day.dayOfWeek} date={day.date} lessons={day.lessons} />
              </Grid>
            })}
          </Grid>

        })}
      </Grid>
    </Container>
  )
  // return (<Grid className={classes.mainGrid} container spacing={1} justify="flex-start">
  // {data.map(entry => <Grid key={entry.date} style={{}} item xs={12} sm={6} md={4} lg={3} xl={2}>
  //   <DayCard day={entry.dayOfWeek} date={entry.date} lessons={entry.lessons} />
  // </Grid>)}
}
export default Schedule