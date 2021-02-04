import { Box, Grid, IconButton, Link, makeStyles, Typography } from "@material-ui/core"
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: 'auto',
        // position: 'absolute',
        // display: 'block',
        boxSizing: 'border-box',
        // width: '100%',
        // bottom: 0,
        padding: theme.spacing(3),
        backgroundColor: 'black'
    },
    text: {
        margin: theme.spacing(1),
        color: 'white'
    },
    social: {
        color: 'white'
    },
    icons: {
        marginTop: theme.spacing(3),
    },
    telegram: {
        color: '#fffdff',
        backgroundColor: '#30a3e6',
        '&:hover': {
            backgroundColor: '#30a3e6',
        }
    },
    facebook: {
        color: '#fff',
        backgroundColor: '#3c5a9a',
        '&:hover': {
            backgroundColor: '#3c5a9a',
        }
    },
    youtube: {
        color: '#f70000',
        backgroundColor: '#f7f7f7',
        '&:hover': {
            backgroundColor: '#f7f7f7',
        }
    },
    filler: {
        display: 'none'
    }
}))
function Footer()
{
    const classes = useStyles()
    return (<Box className={classes.footer}>
        <Grid container spacing={2} style={{maxWidth: '1010px'}}>
            <Grid item xs={12} sm={6} md={5} container direction="row" alignItems="center" wrap="nowrap">
                <ArrowForwardIcon className={classes.text} />
                <Link href="#" className={classes.text} component="p" variant="body1">
                    Главный сайт
                    </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={5} container direction="row" alignItems="center" wrap="nowrap">
                <CastForEducationIcon className={classes.text} />
                <Typography className={classes.text}>
                    Факультет інформаційних технологій
                    </Typography>
            </Grid>
            
            <Grid item className={classes.filler}>
                Hello
            </Grid>
            <Grid item xs={12} sm={6} md={5} container direction="row" alignItems="center" wrap="nowrap">
                <HomeIcon className={classes.text} />
                <Typography className={classes.text}>
                    50027, м. Кривий Ріг, вул. Віталія Матусевича, 11
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={5} container direction="row" alignItems="center" wrap="nowrap">
                <PhoneIcon className={classes.text} />
                <Typography className={classes.text}>
                    (0564) 409-06-04, 409-17-14, 409-17-24, 409-06-25
                    </Typography>
            </Grid>
            <Grid item className={classes.filler}/>
            <Grid item xs={12} md={6} container direction="row" alignItems="center" wrap="nowrap">
                <MailIcon className={classes.text} />
                <Typography component="span" className={classes.text}>
                    fit@knu.edu.ua
                    </Typography>
            </Grid>
        </Grid>
        <Grid container xs={12} className={classes.icons}
            justify="flex-end" alignContent="flex-end" spacing={2} >
            <Grid item>
                <IconButton className={classes.telegram}>
                    <TelegramIcon className={classes.icon}></TelegramIcon>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton className={classes.facebook}>
                    <FacebookIcon></FacebookIcon>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton className={classes.youtube} href="#">
                    <YouTubeIcon></YouTubeIcon>
                </IconButton>
            </Grid>
        </Grid>
    </Box>)
}
export default Footer