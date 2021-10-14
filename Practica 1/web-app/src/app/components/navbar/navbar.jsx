import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faMicrochip, faMemory, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Dashboard from "../memory/dashboard";
import DashboardProcess from '../process/process';
import TreeProcess from '../tree/tree';
/*import StartPage from '../start/StartPage';
import Regions from '../start/regions';
import TopDepartament from '../top/top';
import PatientState from '../PatientState/patientstate';
import InfectedType from '../InfectedType/infectedtype';
import LastCases from '../lastcases/LastCases'
import AgeRange from '../AgeRange/agerange';
import Processes from '../Processes/processes';
import RamPercentaje from '../Ram/percentajedonut';
import RamPolygon from '../Ram/polygon';

ff595e -> rojo
ffca3a -> Amarillo
8ac926 -> Verde
1982c4 -> Celeste
6a4c93 -> Morado
*/
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#1982c4',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    color: "black",
    outline: "none",
    textDecoration: "none"
  },
}));

function SwithcCase(props){
  switch(props.value) {
    case 0:
      return <FontAwesomeIcon icon={faMemory} style={{ color: '8ac926' }} size="2x" />;
    case 1:
      return <FontAwesomeIcon icon={faMicrochip} style={{ color: '8ac926' }} size="2x"/>;
    case 2:
      return <FontAwesomeIcon icon={faProjectDiagram} style={{ color: '8ac926' }} size="2x" />;
    default:
      return <FontAwesomeIcon icon={faBomb} style={{ color: '#3498DB' }} size="2x" />;
  }
}

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <Typography variant="h6" noWrap>
            Control, Creación y Monitoreo de Procesos
          </Typography>
        </Toolbar>
      </AppBar>
      < BrowserRouter>
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
            <Link className={classes.link} to="/">
              <ListItem button key="memoria">
                <ListItemIcon><SwithcCase value={0} /></ListItemIcon>
                <ListItemText primary="Memoria" />
              </ListItem>
            </Link>
          <Link className={classes.link} to="procesos">
            <ListItem button key="procesos">
            <ListItemIcon><SwithcCase value={1} /></ListItemIcon>
            <ListItemText primary="Procesos" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="arbol">
            <ListItem button key="arbol">
            <ListItemIcon><SwithcCase value={2} /></ListItemIcon>
            <ListItemText primary="Arbol" />
            </ListItem>
          </Link>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" >
                <Dashboard />
              </Route>
              <Route exact path="/procesos">
                <DashboardProcess />
              </Route>
              <Route exact path="/arbol">
                <TreeProcess/>
              </Route>
            </Switch>
        </main> 
      </BrowserRouter>  
    </div>
  );
}
