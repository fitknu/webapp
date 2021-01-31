import { Card, CardActionArea, CardContent, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useState } from "react"

const useStyles = makeStyles(theme => ({
  root: {
    // border: '2px solid #0000003d',
    marginBottom: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  }
}))
function Lesson({ name, time, place, teacher, nameLong, teacherLong, mainColor })
{
  const classes = useStyles()
  const [long, setLong] = useState(false)
  return (<Card
    className={classes.root}
    variant="outlined"
    style={{ backgroundColor: mainColor}}>
    <CardActionArea onClick={() => setLong(!long)}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography align="center" variant="h5">
              {time}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              className={classes.name}
              variant="body1"
              color="textPrimary" >{long ? nameLong : name}</Typography>
            <Typography color="textPrimary">{place}</Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary" >{long ? teacherLong : teacher}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </CardActionArea>
  </Card>)
}
export default Lesson