import React from 'react';
import { makeStyles, Paper, IconButton, Chip, Button, Grid, Container, 
  Box, Card, CardContent, CardActions, Avatar, Radio, RadioGroup, FormControlLabel, Dialog, DialogTitle,
  DialogContent, DialogActions, TextField, Badge } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import blue from '@material-ui/core/colors/blue';
import smileRate from "../components/ratings"
import DoneIcon from '@material-ui/icons/Done';
import Cookies from "universal-cookie";
import convertTime from "../components/convertTime.js"
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const tagColor = blue.A300;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '25%',
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
  supporterCard: {
    '&:hover': {
      backgroundColor: '#F5F5F5',
      color: '#000'
    }
  },
  rating: {
    flexBasis: '15%',
    marginLeft: "30%"
  },
  tagChip: {
      margin: theme.spacing(0.5),
  },
  badge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  badgeButton: {
    borderRadius: "1em",
    backgroundColor: '#FFF',
    '&:hover': {
      backgroundColor: '#FFF',
    },
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  large: {
    marginLeft: "55%",
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const SupporterCard = (props) => {
  const {name, rating, employer, title, location, topics, tags, imgsrc, timeBlocks, day, linkedin} = props;
  const classes = useStyles();
  const cookies = new Cookies();
  const email = cookies.get("email");
  const [apptTopic, setApptTopic] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [time, setTime] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openCreated, setOpenCreated] = React.useState(false);
  const chipFilter = (item) => { 
    setApptTopic(item);
  }
  const chipFilterTime = (item) => { 
    setTime(item);
  }
  const handleClick = (e) => {
    console.info(e.target.getAttribute('color'));
  };
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const handleConfirm = (event) => {
    setOpen(false);
    setOpenCreated(true);
  };
  const handleButton = (event) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseCreated = () => {
    setOpenCreated(false);
  };
  function validateForm() {
    return apptTopic!="" && time!="";
  };
  function convertToMin(t){
    return parseInt(t.substring(0, 2))*60+parseInt(t.substring(3,5))
  }
  var startTimes = [];
  function generateTimeChip(st){
    return <Chip
      clickable 
      value={st}
      variant={(time === st) ? 'default' : 'outlined'}
      color="primary" 
      label={convertTime(st)}
      className={classes.tagChip}
      onClick={ () => chipFilterTime(st) }
    />
  }
  function generateMultipleTimeChips(s,e){
    let st=convertToMin(s)
    let et=convertToMin(e)
    for(let i=st;i<et;i+=30){
       startTimes.push(i);
    }
  }
  return (

      <ExpansionPanel className={classes.supporterCard}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Grid container>
            <Grid item xs={3}>
              <Typography className={classes.heading}>{name}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.heading}>Great Match</Typography>
            </Grid>
            <Grid item xs={3}>
              {tags[0] && <Chip label={tags[0]} size="small" className={classes.tagChip} />}
              {tags[1] && <Chip label={tags[1]} size="small" className={classes.tagChip} />}
              {tags[2] && <Chip label={tags[2]} size="small" className={classes.tagChip} />}
            </Grid>
            <Grid item xs={3}>
              <Rating className={classes.rating} name="Supporter Rating" precision={0.5} value={rating} readOnly />
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={4}>
                <Typography>{employer}, {title}</Typography>
                <Typography>{location}</Typography>
                <br/>
                <Typography>Select Appointment Topic:</Typography>
                {topics.map(topic => <Chip 
                  clickable 
                  value={topic}
                  variant={(apptTopic === topic) ? 'default' : 'outlined'}
                  color="primary" 
                  label={topic} 
                  className={classes.tagChip}
                  onClick={ () => chipFilter(topic) }
                />)}
                <br/>
                <br/>
                <Typography>Select Appointment Time:</Typography>
                {timeBlocks.map(block => generateMultipleTimeChips(block["start"],block["end"]))}
                {startTimes.map(st => generateTimeChip(st))}
            </Grid>
            <Grid item xs={1} align="center">
            </Grid>
            <Grid item xs={3} align="center">
            <Typography>Supporter Specialties:</Typography>
              {tags.map(tag => <Chip label={tag} size="small" className={classes.tagChip} />)}
            </Grid>
            <Grid item xs={3}>
            {linkedin !== "" && (
              <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  badgeContent={
                    <Button className={classes.badgeButton} href={linkedin}>
                      <img 
                        src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" 
                        className={classes.badge}/>
                    </Button>}
                >
                <Avatar alt={name} src={imgsrc} className={classes.large} />
             </Badge>
            )}
            {linkedin === "" && <Avatar alt={name} src={imgsrc} className={classes.large} />}
            </Grid>
            <Grid item xs={12} align="center">
              
              <Button
                  margin="normal"
                  variant="contained"
                  color="primary"
                  onClick={handleButton}
                  disabled={!validateForm()}
                >
                  Create Appointment
              </Button>
            </Grid>
          </Grid>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Create appointment with {name}
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Location: {location}
              </Typography>
              <Typography gutterBottom>
                Time: {convertTime(time)} for 30 minutes on {day}
              </Typography>
              <Typography gutterBottom>
                Appointment Type: {apptTopic}
              </Typography>
              <Typography gutterBottom>
                Additional Comments
              </Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows="4"
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleConfirm}color="primary">
                Create Appointment
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openCreated}>
            <DialogTitle id="customized-dialog-title" onClose={handleCloseCreated}>
              Appointment Created
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Your appointment with {name} has been created
              </Typography>
              <Typography gutterBottom>
                You will receive a verification email at {email} to remind you of your appointment
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus href="/appointments" color="primary">
                View Appointments
              </Button>
            </DialogActions>
          </Dialog>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}

export default SupporterCard;