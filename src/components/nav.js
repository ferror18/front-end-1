import React from "react"
import { connect } from "react-redux"
import { createUser } from "../actions";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from "../styles/materialUi.js";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { theme as myTheme } from "../styles/materialUi.js";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useHistory } from "react-router-dom";
import { logOut } from "../actions/clientActions.js";

const drawerWidth = 240;



function Nav({loggedIn, logOut}) {
  const classes = useStyles();
  const theme = useTheme(myTheme);
  const [open, setOpen] = React.useState(false);
  const history = useHistory()

  const logOutHandler = event => {
    logOut();
    history.push('/')
}

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const getIconForGeneralUse = function (i) {
    switch (i) {
      case 0:
        return (<ListItemIcon><SearchIcon/></ListItemIcon>)
      case 1:
        return (<ListItemIcon><BusinessCenterIcon/></ListItemIcon>)
      case 2:
      return (<><Link to={'/settings'}><ListItemIcon><SettingsIcon/></ListItemIcon></Link></>)
      case 3:
      return (<><ListItemIcon><ExitToAppIcon onClick={logOutHandler}/></ListItemIcon></>)
      default:
    }
  }
  const getIconForClasses = function (i) {
    switch (i) {
      case 0:
        return (<ListItemIcon><AddIcon/></ListItemIcon>)
      case 1:
        return (<ListItemIcon><EditIcon/></ListItemIcon>)
      case 2:
      return (<ListItemIcon><DeleteIcon/></ListItemIcon>)
      default:
    }
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'}>
          <Typography id='brand' variant="h6">
            Anywhere-Fitness
          </Typography></Link>
          {
            loggedIn?(
              <Link id='leftsidebtn' to={'/dashboard'}><Button color="inherit" >Dashboard</Button></Link>
            ) : (
              <>
              <Link id='leftsidebtn' to={'/login'}><Button color="inherit">Login</Button></Link>
              <Link to={'/signup'}><Button color="inherit">Sign Up</Button></Link>
              </>
            )
          }
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Explore Classes', 'Enrolled Classes', 'Settings', 'Log Out'].map((text, index) => (
            <ListItem button key={text}>
              {getIconForGeneralUse(index)}
              <ListItemText onClick={logOutHandler} primary={text} />
            </ListItem>
          ))}
        </List>
        {
          (localStorage.getItem('roleId') === "1")?(
              <>
              <Divider />
              <List>
                {['Create Class', 'Edit Class', 'Delte Class'].map((text, index) => (
                  <ListItem button key={text}>
                    {getIconForClasses(index)}
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
                </>
          ) : (<span></span>)
        }
      </Drawer>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn
    }
  }
  
  export default connect(mapStateToProps, { logOut })(Nav)