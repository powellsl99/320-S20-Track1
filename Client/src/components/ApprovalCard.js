import React from 'react';
import { makeStyles, Modal, Paper, IconButton, Chip, Button, Grid, Container, Box, Card, CardContent, CardActions, Avatar } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    gridpic: {
      marginLeft: "80%"
    },
    picture: {
      marginLeft: "55%",
      height: "100%",
    },
    paper: {
      height: "100%",
      width: "130%",
    },
    rating: {
      marginLeft: "20%"
    },
    dayselect: {
      marginLeft: "40%"
    },
    tagChip: {
        margin: theme.spacing(0.5),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    large: {
      marginLeft: "55%",
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

  function handleApprove(){

  }

  function handleDeny(){
      
  }
  

  

const ApprovalCard = (props) => {
    const classes = useStyles();


    return (
        <ExpansionPanel >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>{props.name}</Typography>
            <Typography className={classes.secondaryHeading}>Application date: {props.date}</Typography>
            <Typography className={classes.secondaryHeading} style={{marginLeft: '20%'}}>{props.supporterType}</Typography> 
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                  <Typography>Current Employer: {props.employer}</Typography>
                  <Typography>Title: {props.title}</Typography>
                  <Typography>Email: {props.email}</Typography>
                  <Typography>Team: {props.team}</Typography>
                  
              </Grid>
              <Grid item lg={12} align="center" style={{display: 'flex'}}>
                <Grid lg={6} align='center'>
                    <Button
                        margin="normal"
                        variant="contained"
                        color="primary"
                        
                    >
                        Approve
                    </Button>
                </Grid>
                <Grid lg={6} align='center'>
                    <Button
                        margin="normal"
                        variant="contained"
                        color="primary"
                    >
                        Deny
                    </Button>
                </Grid>

              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default ApprovalCard;