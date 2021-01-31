import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Lesson from './Lesson'

// const colors = {
//   pink: '#ff008f26',
//   purple: '#5000ff2e',
//   blue: '#0010ff2e',
//   lightblue: '#0070ff2e',
//   swamp: '#00ff872e',
//   green: '#00ff282e',
//   yellow: '#ffff0030',
//   orange: '#ff83002e',
//   red: '#ff18002e'
// }
const useStyles = makeStyles(theme => ({
  day: {
    height: '100%',
    backgroundColor: '#0000000d'
  }
}))

const dayWeek = {
  Пн: "Понедельник",
  Вт: "Вторник",
  Ср: "Среда",
  Чт: "Четверг",
  Пт: "Пятинца",
  Сб: "Суббота",
  Нд: "Воскресенье",
}


function DayCard({ matrix, day, date, lessons })
{
  const classes = useStyles()

  return (<Card className={classes.day}>
    <CardContent>
      <Typography variant="h6">
        {dayWeek[day]}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {date}
      </Typography>
      {lessons.map(lesson =>
      {
        const { name, place, time, teacher, nameLong, teacherLong } = lesson
        return (
          <Lesson
            key={time}
            name={name}
            place={place}
            time={time}
            teacher={teacher}
            nameLong={nameLong}
            teacherLong={teacherLong}
            mainColor={matrix[name]}
          />
        )
      })}
    </CardContent>
  </Card>)
}
export default DayCard