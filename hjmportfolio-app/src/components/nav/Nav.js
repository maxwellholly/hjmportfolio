import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';


const drawerWidth = '30%';
const appBarHeight = '10%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `100%`,
            height: appBarHeight,
        },
        zIndex: '10000',
        backgroundColor: '#000000',
        boxShadow: '0px 0px 28px rgba(210, 89, 61, 0.80), 0 -10px 20px -5px #D2593D'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        [theme.breakpoints.up('sm')]: {
            width: '15%',
            height: '100%',
        },
        width: '100%',
        paddingTop: '5%',
        backgroundImage: `url(https://hjmportfolio.s3-us-west-2.amazonaws.com/vinicius-amnx-amano-f9oQZOk9vnk-unsplash.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        overflow: 'hidden',
        height: 'auto'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navLink: {
        textDecoration: 'none',
        color: '#EEEEEE',
        backgroundColor: 'rgba(0,0,0,.75)',
        marginBottom: '5px',
    },
    nav: {
        width: '10%'
    },
    h6: {
        visibility: 'hidden',
        width: '0',
        [theme.breakpoints.up('sm')]: {
            visibility: 'visible',
            width: '25%'
        },
    },
    navText: {
        float: 'left'
    },
    home: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '20px',
        },
        height: '60px',
        marginTop: 'unset'
    }
}));

const Nav = props =>{
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                {['blog', 'contact', 'projects', 'resume', 'admin'].map((text, index) => (
                    <NavLink to={'/'+text} className={classes.navLink} key={index}>
                        <ListItem button key={index} className={classes.navLink}>
                            <ListItemText primary={text} className={classes.navText}/>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );

    return (
        <section className={classes.nav}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <NavLink to="/">
                            <img src="https://hjmportfolio.s3-us-west-2.amazonaws.com/gohome.png" alt="home link" className={classes.home}/>
                        </NavLink>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        </section>
    );
}

export default Nav;
