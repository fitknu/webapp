import { Box, Grid, IconButton, Link, makeStyles, Typography } from "@material-ui/core"
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
        margin: theme.spacing(1),
        color: 'white'
    }
}))
function Footer()
{
    const classes = useStyles()
    return (<Box className={classes.footer}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Link href="#" className={classes.footer__text} component="p" variant="body1">
                    Главный сайт
                </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography className={classes.footer__text} color="primary">
                    Мы в социальных сетях
                </Typography>
                <IconButton color="primary">
                    <TelegramIcon></TelegramIcon>
                </IconButton>
                <IconButton color="primary">
                    <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton color="primary">
                    <YouTubeIcon></YouTubeIcon>
                </IconButton>
            </Grid>
        </Grid>
    </Box>)
}
export default Footer