import React, {useState, Component} from 'react';
import Cookies from 'universal-cookie';
import { makeStyles } from '@material-ui/core/styles';
import UpcomingAppointmentCard from '../components/UpcomingAppointmentsCard';
import PreviousAppointmentCard from '../components/PreviousAppointmentsCard';
import {Container, Grid, Typography, GridList, GridListTile, ListSubheader, Paper} from '@material-ui/core';

class appts2 extends Component{

    constructor(props){
        super(props);
        this.state = {
            appointments: [],
            isLoaded: false
        };
    }


    componentDidMount(){
        fetch('https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/appointments/students/%7Bid%7D?student_id=2')
            .then(res => res.json())
            .then(json => {
                var a = JSON.parse(json.body)
                console.log(a)
                this.setState({
                    isLoaded: true,
                    appointments: a
                })
            });
    }

    render(){

        var {isLoaded, appointments} = this.state;
        
        if( !isLoaded ){
            return <div>Loading.....</div>;
        }
        else{
           
            
            return(
                <div>
                    {appointments.map((appt) => (
                        <Typography>{appt.supporterFN + ' ' + appt.supporterLN}</Typography>
                    ))}
                </div>
            )
            
            
        }
        
    }
}

export default appts2;