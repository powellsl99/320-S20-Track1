import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import { makeStyles } from '@material-ui/core/styles';
import UpcomingAppointmentCard from '../components/UpcomingAppointmentsCard';
import PreviousAppointmentCard from '../components/PreviousAppointmentsCard';
import {Container, Grid, Typography, GridList, GridListTile, ListSubheader, Paper, Drawer} from '@material-ui/core';
const drawerWidth = "0%";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));




const MyApp = () => {

  const cookies = new Cookies();
  const tk = cookies.get('token');
 
  const classes = useStyles();
  const appts = 
    [
      {
        subject: 'Resume Help',
        supporter: 'Chinmay Patil',
        location: 'LGRC A310',
        medium: 'In Person',
        time: '12:00 PM - 12:30 PM',
        date: 'April 20th',
        profilepic: 'https://www.cics.umass.edu/sites/default/files/styles/people_individual/public/headshots/img_4695_copy.jpg?itok=jwwJF0KP'
      },
      {
        subject: 'Academic Advising',
        location: 'LGRC A330',
        supporter: 'Aditya Parmar',
        medium: 'Online',
        time: '1:00 PM - 1:30 PM',
        date: 'April 21st',
        profilepic: 'https://media-exp1.licdn.com/dms/image/C4E03AQEI1xiLxIRwwQ/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=c9kLd437l0lZYFSzgA8Q1C9iNeow_wVHRRB8J3GVRJ8'
      },
      {
        subject: 'Academic Advising',
        location: 'LGRC A330',
        supporter: 'Aditya Parmar',
        medium: 'Online',
        time: '1:00 PM - 1:30 PM',
        date: 'April 21st',
        profilepic: 'https://media-exp1.licdn.com/dms/image/C4E03AQEI1xiLxIRwwQ/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=c9kLd437l0lZYFSzgA8Q1C9iNeow_wVHRRB8J3GVRJ8'
      },
      {
        subject: 'Academic Advising',
        location: 'LGRC A330',
        supporter: 'Aditya Parmar',
        medium: 'Online',
        time: '1:00 PM - 1:30 PM',
        date: 'April 21st',
        profilepic: 'https://media-exp1.licdn.com/dms/image/C4E03AQEI1xiLxIRwwQ/profile-displayphoto-shrink_800_800/0?e=1592438400&v=beta&t=c9kLd437l0lZYFSzgA8Q1C9iNeow_wVHRRB8J3GVRJ8'
      }
  ];
 
  return (
    <Container component='main' class="jss271">
        <Drawer className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
          <Typography align="center">What day would you like an appointment on?</Typography>
        </Drawer>
    
        <Grid lg = {12} style = {{justifyContent: 'center', display: 'flex'}}>
          <Typography style={{fontSize: 50}}>Upcoming Appointments</Typography>
        </Grid>
        
          
                
              
                {appts.map((appointment) => (
                  <Grid lg = {12} style = {{justifyContent: 'center', display: 'flex'}}>
                    <UpcomingAppointmentCard 
                    subject = {appointment.subject}
                    location = {appointment.location}
                    medium = {appointment.medium}
                    time = {appointment.time}
                    date = {appointment.date}
                    supporter = {appointment.supporter}
                    profilepic = {appointment.profilepic}
                    />
                  </Grid>
                  
                ))}
          
                  
        <Grid container lg = {12} style = {{justifyContent: 'center', display: 'flex'}}>
          <Typography style={{fontSize: 50}}>Previous Appointments</Typography>
        </Grid>
        
        
              
            
              {appts.map((appointment) => (
                <Grid lg = {12} style = {{justifyContent: 'center', display: 'flex'}}>
                  <PreviousAppointmentCard 
                    subject = {appointment.subject}
                    location = {appointment.location}
                    medium = {appointment.medium}
                    time = {appointment.time}
                    date = {appointment.date}
                    supporter = {appointment.supporter}
                    profilepic = {appointment.profilepic}
                  />
                </Grid>
              ))}
            
          
          
          
    
    </Container>
    
  );
}



export default MyApp;