import React from 'react';
import { makeStyles, Modal, Paper, IconButton, Chip, Button, Grid, Container, Box, Card, CardContent, CardActions, Avatar } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ApprovalCard = () => {



    return (
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                  <br/>
                  <Typography>Team: {props.team}</Typography>
                  
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Avatar alt="c" src={""}
                   className={classes.large} />       
              </Grid>
              <Grid item xs={12} align="center">
              
                <Button
                    margin="normal"
                    variant="contained"
                    color="primary"
                    
                  >
                    Approve
                </Button>
               
                
                  <Button
                    margin="normal"
                    variant="contained"
                    color="primary"
                  >
                    Deny
                  </Button>
                }
                <Modal>
                
                </Modal>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default ApprovalCard;