import
{
  FormControl, InputLabel,
  MenuItem, Select, TextField,
  makeStyles, Grid, CircularProgress
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useEffect, useState } from "react";
import Asu from '../asu.json'


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  ageSelector: {
    minWidth: 80,
  },
  groupSelector: {
    minWidth: 150,
  },
  footer: {
    marginTop: 2,
    position: "relative",
    bottom: 0,
  }
}))
function GetQuery({ setSchedule })
{
  const classes = useStyles()
  const [age, setAge] = useState('')
  const [group, setGroup] = useState(null)

  const [loading, setLoading] = useState(false)
  // const [ages, setAges] = useState([])
  const [groups, setGroups] = useState([])

  const handleAge = (newAge) =>
  {
    setAge(newAge)
    setGroup(null)
    setGroups(Asu.ages[newAge])
  }
  const handleGroup = (newGroup) =>
  {
    console.log(`${age} ${newGroup}`)
    setGroup(newGroup)

    try
    {
      if (newGroup === null)
      {
        localStorage.removeItem('id')
        localStorage.removeItem('schedule')
        return
      }
      fetch(`https://mute-darkness.druven.workers.dev/?age=${age}&group=${newGroup}`)
        .then(data => data.json())
        .then(data => data.schedule)
        .then(data => JSON.parse(data))
        .then(data =>
        {
          console.log(data)
          if (data !== null)
          {
            setSchedule(data)
          } else 
          {
            console.log('Null data')
            console.log(`https://mute-darkness.druven.workers.dev/?age=${age}&group=${newGroup}`)
          }
          setLoading(false)
          const id = { age, group: newGroup }
          localStorage.setItem('id', JSON.stringify(id))
          localStorage.setItem('schedule', JSON.stringify(data))
        })
        .catch(e => console.log(e))
    } catch (e)
    {

    }
  }

  useEffect(() =>
  {
    if (localStorage.getItem('id'))
    {
      const id = JSON.parse(localStorage.getItem('id'))
      const schedule = JSON.parse(localStorage.getItem('schedule'))
      setSchedule(schedule)
      const oldAge = id.age
      const oldGroup = id.group
      setAge(oldAge)
      setGroups(Asu.ages[oldAge])
      setGroup(oldGroup)
    }
  }, [setSchedule])

  return (
    <>
      <FormControl className={classes.formControl}>
        <Grid container spacing={2}>
          <Grid item>
            <InputLabel>Курс</InputLabel>
            <Select
              className={classes.ageSelector}
              value={age}
              onChange={(e) => handleAge(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Autocomplete
              disabled={!age}
              className={classes.groupSelector}
              value={group}
              onChange={(event, newVal) => handleGroup(newVal)}
              noOptionsText="Нет совпадений"
              options={groups}
              // getOptionLabel={(option) => option.name}
              renderInput={params => <TextField {...params} label="Группа" />}
            />
          </Grid>
          <Grid item>
            {loading && <CircularProgress size='4rem' />}
          </Grid>
        </Grid>
      </FormControl>
    </>
  )
}
export default GetQuery