import React, { useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppointmentCard from '../components/AppointmentCard';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles, TextField, Grid, CircularProgress} from '@material-ui/core';
import Menu from "../Navigation/appbar.js";
import convertTime from "./FindSupporter/convertTime"
import Cookies from "universal-cookie";
import ApprovalCard from "../components/ApprovalCard";

const cookies = new Cookies();
const role = cookies.get("role");
const id = cookies.get('id');
//const id = 2;

const drawerWidth = "25%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  inputs: {
    marginLeft: "5%",
    marginRight: "5%",
    width:"90%"
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  dayselect: {
    marginLeft: "40%"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  rating: {
   align: "center",
   alignItems: "center",
  },
}));

const ResponsiveDrawer = (props) => {
  //Gets info from the cookies
  //get users role

  const today = new Date();
  const [sliderTime, setSliderTime] = React.useState([540, 1020]);
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [name,setName]=React.useState("");
  const [search,setSearch]=React.useState("");
  const [appointments, setAppointments]=React.useState([]);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Menu/>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Typography align="center" variant="h5">Filters</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          className={classes.inputs}
          align="center"
          placeholder="Search Supporter"
          onChange={e => setSearch(e.target.value)}
        />
        <br/>
        {}
      </div> 
      </Drawer>
      <main className={classes.content}>
        <ApprovalCard
          name = "Chinmay Patil"
          date="04/20/2020"
          supporterType="Student"
          employer='CICS'
          email='cpatil@umass.edu'
          title='Career Developer'
          team="N/A"
          
        />
        
      </main>
    </div>
  );
  }


export default ResponsiveDrawer;