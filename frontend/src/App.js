import { AppBar, Toolbar, Typography, makeStyles, IconButton, List, ListItem, ListItemIcon, ListItemText, Box, Grid, Fab } from '@material-ui/core';
import { useState } from 'react';
import GetQuery from './comp/GetQuery';
import Schedule from './comp/Schedule';
import ScrollTop from './comp/ScrollTop';

import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import GridOnIcon from '@material-ui/icons/GridOn';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// const data = require('./data.json')
const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 'auto',
    // position: 'absolute',
    // display: 'block',
    boxSizing: 'border-box',
    // width: '100%',
    // bottom: 0,
    padding: theme.spacing(2),
    backgroundColor: 'black'
  },
  footer__text: {
    color: 'white'
  }
}))


function App()
{
  const classes = useStyles()
  const [drawer, setDrawer] = useState(false)

  const [schedule, setSchedule] = useState([])
  
  return (
    <div className="App" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar id="back-to-top-anchor">
          <IconButton edge="start" color="inherit" onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography>
            Расписание
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={drawer}
        onOpen={() => null}
        onClose={() => setDrawer(false)}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <GridOnIcon />
            </ListItemIcon>
            <ListItemText primary="Расписание" />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <GetQuery setSchedule={setSchedule} />
      {(true) && <Schedule shedule={schedule} />}
      <ScrollTop>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Box className={classes.footer}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography className={classes.footer__text}>
              FIT
            </Typography>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}

export default App;
