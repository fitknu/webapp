import { Box, Button, Collapse, Grid, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@material-ui/core'
import { useState } from 'react'
import dataJS from '../plan.json'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
function getType(lesson)
{
    if (lesson.isExam)
    {
        return "Экзамен"
    }
    if (lesson.isZalik)
    {
        return 'Зачёт'
    }
    if (lesson.isKP)
    {
        return "КР"
    }
    if (lesson.isKor)
    {
        return "Кор"
    }
    return ""
}
const useStyles = makeStyles(theme => ({
    head: {
        // backgroundColor: theme.palette.common.black,
        backgroundColor: theme.palette.action.selected,
        '& > *': {
            // color: theme.palette.common.white
        },
    },
    body: {
        '& > *:nth-child(4n+3)': {
            backgroundColor: theme.palette.action.hover
        },

    },
    number: {
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        }
    },
    kafedra: {
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        }
    }

}))
const useRowStyles = makeStyles(theme => ({
    longOpenIcon: {
        backgroundColor: 'red',
        width: '100%',
    },
    buttons: {
        marginTop: theme.spacing(2)
    },
    normalRow: {

    },
    number: {
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        }
    },
    kafedra: {
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        }
    },
    kafedraDown: {
        [theme.breakpoints.up("xs")]: {
            display: 'none'
        }
    }
}))
function Row({ lesson, superSmall })
{
    const classes = useRowStyles()
    const [open, setOpen] = useState(false)
    return (<>
        <TableRow className={classes.normalRow}>

            {!superSmall && <TableCell size="small">
                <IconButton size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>}
            <TableCell className={classes.number}>{lesson.number}</TableCell>
            <TableCell>{lesson.name}</TableCell>
            <TableCell>{lesson.HoursAll}</TableCell>
            <TableCell>{getType(lesson)}</TableCell>
            <TableCell className={classes.kafedra}>{lesson.kafedra}</TableCell>
        </TableRow>
        {superSmall && <TableRow>
            <TableCell colSpan={3} align="center">
                <Button fullWidth onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </Button>
            </TableCell>
        </TableRow>}
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4} >
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                            Подробнее
                        </Typography>
                        <Table size="small" den>
                            <TableHead>
                                <TableCell>ECTS</TableCell>
                                {lesson.NationalKR && <TableCell>Нац. кр</TableCell>}
                                <TableCell className={classes.kafedraDown}>Кафедра</TableCell>
                                {lesson.HoursLecture && <TableCell>Лекции</TableCell>}
                                {lesson.HoursPractice && <TableCell>Практика</TableCell>}
                                {lesson.HoursSeminar && <TableCell>Семинары</TableCell>}
                                {lesson.HoursLabs && <TableCell>Лабораторные</TableCell>}
                                {lesson.HoursEnd && <TableCell>Конец</TableCell>}
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{lesson.ECTS}</TableCell>
                                    {lesson.NationalKR && <TableCell>
                                        {lesson.NationalKR}</TableCell>}
                                    <TableCell className={classes.kafedraDown}>{lesson.kafedra}</TableCell>
                                    {lesson.HoursLecture && <TableCell>
                                        {lesson.HoursLecture} годин</TableCell>}
                                    {lesson.HoursPractice && <TableCell>
                                        {lesson.HoursPractice} годин</TableCell>}
                                    {lesson.HoursSeminar && <TableCell>
                                        {lesson.HoursSeminar} годин</TableCell>}
                                    {lesson.HoursLabs && <TableCell>
                                        {lesson.HoursLabs} годин</TableCell>}
                                    {lesson.HoursEnd && <TableCell>
                                        {lesson.HoursEnd} годин</TableCell>}
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Grid container spacing={1} className={classes.buttons}>
                            <Grid item>
                                <Button variant="contained" href={lesson.fileLink}>
                                    Распечатать
                                </Button>
                            </Grid>
                            {lesson.helpLinks.map(lin =>
                            {
                                return <Grid item>
                                    <Button variant="outlined"
                                        color="primary" href={lin.linkHref}>
                                        {lin.linkName}
                                    </Button>
                                </Grid>

                            })}
                        </Grid>

                    </Box>
                </Collapse>
            </TableCell>

        </TableRow>
    </>)
}
function Plan()
{
    const classes = useStyles()
    const [data, setData] = useState(dataJS)
    const superSmall = useMediaQuery('(max-width: 410px)')
    // console.log(d)
    return (<TableContainer component={Paper}>
        <Table size="small">
            <TableHead>
                <TableRow className={classes.head}>
                    {!superSmall && <TableCell size="small" ></TableCell>}
                    <TableCell className={classes.number}>
                        №
                    </TableCell>
                    <TableCell>
                        Дисциплина
                    </TableCell>
                    <TableCell>Всього годин</TableCell>
                    <TableCell>Тип</TableCell>
                    <TableCell className={classes.kafedra}>Кафедра</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className={classes.body}>
                {data.map(lesson => <Row key={lesson.name}
                    lesson={lesson} superSmall={superSmall}></Row>)}
            </TableBody>
        </Table>
    </TableContainer>)
}
export default Plan