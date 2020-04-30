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
  const [isLoaded, setLoaded]=React.useState(false);


  const blockTime=30;
  if(role == 'Student'){
    
    if(!Array.isArray(appointments)){
      var filteredAppointmentList = [];
    }
    else{
      var filteredAppointmentList = (appointments.filter(
        appt => String((appt.supporterFN + " " + appt.supporterLN).toLowerCase()).includes(search.toLowerCase())))
    }
  }
  if(role !== 'Student'){
    if(!Array.isArray(appointments)){
      var filteredAppointmentList = [];
    }
    else{
      console.log(appointments);
      var filteredAppointmentList = (appointments.filter(
      appt => String((appt.supporterFN + " " + appt.supporterLN).toLowerCase()).includes(search.toLowerCase())))
    }
    
    
    
  }
  const updateList = (val) => {
    setName(val);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderTime(newValue);
  };
  function convertToMin(t){
    return parseInt(t.substring(0, 2))*60+parseInt(t.substring(3,5));
  }
  function getTheMonth(month){
    if (parseInt(month)>10){
      console.log(month.toString())
      return month.toString();
    }
    else{
      console.log("0".concat(month.toString()))
      return "0".concat(month.toString());
    }
  }

  function checkTimeInRange(start,end, timeBlockArray){
    for(let i=0;i<timeBlockArray.length;i++){
      if(start<(convertToMin(timeBlockArray[i]["end"]+blockTime)) && end>(convertToMin(timeBlockArray[i]["start"]+blockTime)) && start!==end){
        return true
      }
    }
    return false
  }

  useEffect(() => {
    
    if(role == 'Student'){
      fetch('https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/appointments/students/%7Bid%7D?student_id='+id)
      .then(res => res.json())
      .then(json => {
        
        setLoaded(true);
        setAppointments(json.body);
      })
      .catch(err => {
        setAppointments([]);
        setLoaded(true);
      })
    }
    else if(role == 'supporter'){
      fetch('https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/appointments/supporters/'+id)
      
        .then(res => res.json())
        .then(json => {
          console.log(role)
          setLoaded(true);
          setAppointments(json.body);
        })
        .catch(err => {
          setAppointments([]);
          setLoaded(true);
        })
      }
    else{
      
      fetch('https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/appointments')
        .then(res => {
          console.log("Got response");
          return res.json();
        })
        .then(json => {
          
          setLoaded(true);
          setAppointments(json.body);
          
        })
        .catch(err => {
          setAppointments([]);
          setLoaded(true);
        })
      
    }
  },[]);

  function convertDate(time, duration){
    var hours = parseInt(time.substring(11,13)) * 60;
    var minutes = parseInt(time.substring(14,16));
    return convertTime(hours + minutes + duration);
  }

  if(!isLoaded){
    return (
      <div align="center">
        <br></br>
        <Typography variant="h4">Loading...</Typography>
        <br></br>
        <CircularProgress />
      </div>
    
    )
  }
  
  else {
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
        
        {filteredAppointmentList.length>0 && <Typography align="center" variant="h4">Upcoming Appointments</Typography>}
        {filteredAppointmentList.length===0 && <Typography align="center" variant="h4">We couldnt find an appointment with those attributes. Please try widening your search.</Typography>}
        <br/>
        <br/>
        {filteredAppointmentList.map((appointment) => (
                today < new Date(appointment.time_scheduled) &&
                  <Grid item lg = {12}>
                    <AppointmentCard
                      upcoming = {true}
                      role = {role.toLowerCase()}
                      subject = {appointment.type}
                      location = {appointment.location}
                      medium = {appointment.method}
                      start = {convertDate(appointment.time_scheduled, 0)}
                      end = {convertDate(appointment.time_scheduled, appointment.duration)}
                      date = {appointment.time_scheduled.substring(0,10)}
                      supporter = {appointment.supporterFN + " " + appointment.supporterLN}
                      student = {appointment.studentFN + " " + appointment.studentLN}
                      supporterProfilePic = {appointment.supporterPic}
                      studentProfilePic = {""}
                      comments = {appointment.comment}
                    />
                  </Grid>
                
                  
                ))}
        <br/>
        <br/>
        {filteredAppointmentList.length>0 && <Typography align="center" variant="h4">Previous Appointments</Typography>}
        <br/>
        <br/>
        {filteredAppointmentList.map((appointment) => (
                today > new Date(appointment.time_scheduled) &&
                <Grid item lg = {12}>
                  <AppointmentCard 
                    upcoming = {true}
                    role = {role.toLowerCase()}
                    subject = {appointment.type}
                    location = {appointment.location}
                    medium = {appointment.method}
                    start = {convertDate(appointment.time_scheduled, 0)}
                    end = {convertDate(appointment.time_scheduled, appointment.duration)}
                    date = {appointment.time_scheduled.substring(0,10)}
                    supporter = {appointment.supporterFN + " " + appointment.supporterLN}
                    student = {appointment.studentFN + " " + appointment.studentLN}
                    supporterProfilePic = {appointment.supporterPic}
                    studentProfilePic = {""}
                    comments = {appointment.comment}
                  />
                </Grid>
              ))}
      </main>
    </div>
  );
  }
}

export default ResponsiveDrawer;