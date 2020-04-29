import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Cookies from "universal-cookie";
import FormControl from "@material-ui/core/FormControl";
import Topics from "./FindSupporter/topics.js"
import Tags from "./FindSupporter/tags.js"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Dialog} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function StudentSettings() {
  function TabPanel(props) {
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="right" ref={ref} {...props} />;
    });
    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        style={{width:"100%"}}
        TransitionComponent={Transition}
        {...other}
      >
        <br/>
       
        {value === index && index===0&& (
          
          
         
           
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <TextField
                      variant="outlined"
                      id="default"
                      fullWidth
                      label="First Name"
                      defaultValue={firstName}
                      name="first_name"
                      required="true"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    
                  </Grid>
                 
                  <Grid item xs={2}>
                    
                    <TextField
                      variant="outlined"
                      id="default"
                      fullWidth
                      label="Preferred Name"
                      
                      name="preferred Name"
                      onChange={(e) => setPreferredName(e.target.value)}
                    />
                  </Grid>
                  
                  
                  <Grid item xs={2}>
                    <TextField
                      variant="outlined"
                      id="default"
                      fullWidth
                      label="Last Name"
                      defaultValue={lastName}
                      required="true"
                      name="field default"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  
                  <br/>
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      id="default"
                      fullWidth
                      label="Email Address"
                      defaultValue={emailAdd}
                      required="true"
                      name="field default"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={2}>
                    <TextField
                      variant="outlined"
                      id="default"
                      fullWidth
                      label="Pronouns"
                      name="field default"
                      onChange={(e) => setPronouns(e.target.value)}
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      id="default"
                      fullWidth
                      label="Phone Number"
                      name="field default"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                  <br/>
                  <Grid item xs={8}>
                    <TextField
                      variant="outlined"
                      id="default"
                      fullWidth="true"
                      multiline
                      rows="5"
                      label="Personal Biography"
                      name="field default"
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </Grid>
                  <br/>
                  
        
                
              
           
            </Grid>
        )}
        {value===index&&index==1&&(
          
       <Grid container spacing={1}>
         
                 <Grid item xs={12}>
                      Type of Supporter (Check all that apply){" "}
                      <Grid item xs={12} spacing="12">
                        <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Professional Staff"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Student Staff"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Alumni"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Faculty"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Other"
                         labelPlacement="end"
                       />
                     </Grid>
                   </Grid>
                   <br/>
                   <Grid item xs={6}>
                     <TextField
                       variant="outlined"
                       id="default"
                       fullWidth="true"
                       label="Current Employer"
                       name="field default"
                       onChange={(e) => setBio(e.target.value)}
                     />
                   </Grid>
                   <Grid item xs={6}>
                     <TextField
                       variant="outlined"
                       id="default"
                       fullWidth="true"
                       label="Title"
                       name="field default"
                       onChange={(e) => setBio(e.target.value)}
                     />
                   </Grid>
                   <br/>
                   <Grid item
                    xs={12}>
                     Teams (Check all that apply){" "}
                     <Grid item xs={12} spacing="12">
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="CICS Careers"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Ventures"
                         labelPlacement="end"
                       />
                     </Grid>
                   </Grid>
                   <br/>
                   <Grid item xs={12}>
                     Supporter Specialization Areas (Check all that apply){" "}
                     <Grid item xs={12} spacing="12">
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Technical Interview Coaching"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Behavioral Interview Coaching"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Offer Evaluation/Salary Negotiation"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Job Search"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Cover Letter and Resume"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Applying to Grad and Professional School"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Networking Skills"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="General Career Exploration"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Internship/Co-Op/Research"
                         labelPlacement="end"
                       />
                       <FormControlLabel
                         value="start"
                         control={<Checkbox color="primary" />}
                         label="Other Student Support"
                         labelPlacement="end"
                       />
                       <br/>
                       <br/>
                       
                     </Grid>
                   </Grid>
                   
            
                 </Grid>
       )}

       {value===index&&index==2&&(
          
                    <Grid container spacing={1}>
                <Grid item xs={12}>
                  Receive emails for:{" "}
                  <Grid item xs={12} spacing="12">
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Platform News"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Platform Updates"
                      labelPlacement="end"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  How many hours before an appointment would you like a reminder
                  email?{" "}
                  <Grid item xs={12} spacing="12">
                    <TextField
                      id="outlined-basic"
                      label="Number of Hours Before for Appointment Reminder Email"
                      fullWidth="true"
                      variant="outlined"
                      margin="normal"
                      type="number"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  Would you like to display your feedback?{" "}
                  <Grid item xs={12} spacing="12">
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="feedback-display"
                        name="feedback"
                        value={value}
                        onChange={handleFeedbackChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio color="primary" />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio color="primary" />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                
              </Grid>
          )}
          {value===index&&index===3&&(
                      <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Autocomplete
                    id="field-defaults"
                    options= {Topics}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select a Topic"
                      />
                    )}
                    onChange={(e,v) => setCurrField(v)}
                  />
                </Grid>
                <Grid item xs={2}>
                <Autocomplete
                    id="default"
                    name="field default"
                    options= {durationDefaults}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select duration in min"
                        defaultValue=""
                      />
                    )}
                    onChange={(e,v) => setNewDefault(v)}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Button variant='contained' color='primary' size='large'>
                    Set
                  </Button>
                </Grid>
              </Grid>
          )}
          {value === index && index===4&& (
          <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Autocomplete
                    id="supporter-topics"
                    options= {Topics}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Topics"
                      />
                    )}
                    onChange={(e,v) => setSelectedTopic(v)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant='contained' color='primary' size='large'>
                    Delete Topic
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="outlined"
                    id="add-topic"
                    fullWidth
                    label="Topic to add:"
                    name="add-topic"
                    onChange={e => setAddTopic(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant='contained' color='primary' size='large'>
                    Add Topic
                  </Button>
                </Grid>
              </Grid>
          )}
           {value === index && index===5&& (
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Autocomplete
                    id="tags"
                    options= {Tags}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Tags"
                      />
                    )}
                    onChange={(e,v) => setSelectedTag(v)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant='contained' color='primary' size='large'>
                    Delete Tag
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="outlined"
                    id="add-tag"
                    fullWidth
                    label="Tag to add:"
                    name="add-tag"
                    onChange={e => setAddTag(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant='contained' color='primary' size='large'>
                    Add Tag
                  </Button>
                </Grid>
              </Grid>
           
           )}
           <Button
            variant="contained"
            color="primary"
            float="right"
            size="large"
            alignContent="center"
            width="4%"
            onClick={setSettingsButtonSaved(true)}
          >
            Save Settings
          </Button>
      </div>
    );
  }
 
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: '100%',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      
    },
  }));
  
  const durationDefaults = [
    '30',
    '45',
    '60',
    '90',
    '120'
  ]
  
  const classes = useStyles();
  const [TabValue, setTabValue] = React.useState(0);
  const [first_name, setFirstName] = useState("");
  const [preferred_name, setPreferredName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [link, setLink] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [ID, setID] = useState("");
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [curField, setCurrField] = useState("");
  const [newDefault, setNewDefault] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [addTopic, setAddTopic] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [addTag, setAddTag] = useState("");
  const url = "https://7jdf878rej.execute-api.us-east-2.amazonaws.com/prod/users/supporters/1";
  const cookies = new Cookies();
  const firstName=cookies.get("firstName");
  const lastName=cookies.get("lastName");
  const emailAdd=cookies.get("email");
  
  const [settingsSaved, setSettingsSaved]=useState(false);
  const [settingsButtonSaved, setSettingsButtonSaved]=useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [openModal, setOpen] = React.useState(false);
  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    console.log("@#$%");
    fetch(url)
      .then((res) => {
        
  
        return(res.json());})
      .then((json) => {
        var info = json.body;
        console.log(json);
        setFirstName(info.first_name);
      });

      
       if(settingsButtonSaved===false){
        console.log("inside the if condition");
         setOpen(true);
       }
     
  
      

  }, []);

  const [value, setValue] = React.useState("yes");

  const handleFeedbackChange = (event) => {
    setValue(event.target.value);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (

    <div className={classes.root}>
   
      <Tabs value={TabValue} orientation="vertical" variant="scrollable" onChange={handleTabChange} aria-label="simple tabs example" >
        
        <Tab label="Profile Information" {...a11yProps(0)}/>
        <Tab label="Supporter Information" {...a11yProps(1)} />
        <Tab label="Appointment And Email Settings" {...a11yProps(2)} />
        <Tab label="Topic Default Timings" {...a11yProps(4)} />
        <Tab label="Supporter Topics" {...a11yProps(5)} />
        <Tab label="Supporter Specialities" {...a11yProps(6)} />
      </Tabs>
      
   
    <TabPanel value={TabValue} index={0} style={{color:"black"}}>
    
      Profile Information
     
    </TabPanel>
    
    <TabPanel value={TabValue} index={1}>
      Supporter Information
    </TabPanel>
    <TabPanel value={TabValue} index={2}>
      Appointment and Email Settings
    </TabPanel>
    <TabPanel value={TabValue} index={3}>
      Topic Default Timings
    </TabPanel>
    <TabPanel value={TabValue} index={4}>
      Supporter Topics
    </TabPanel>
    <TabPanel value={TabValue} index={5}>
      Supporter Specialities
    </TabPanel>
    <Dialog
          open={openModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleModalClose}
        >
          <DialogTitle id="alert-dialog-slide-title">{"Do you want to save the changes you made?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            Do you want to save the changes you made?
            </DialogContentText>
            <div style={{textAlign:'center'}}>
            {/* <Button className={classes.button}
      id="1"
      
       
        color="primary"
        onClick={setSettingsSaved(true)}
        style={{marginLeft:'10px',marginRight:'10px'}}
      >
        Yes
       </Button>
       <Button className={classes.button}
      id="2"
      
       
        color="primary"
        onClick={setSettingsSaved(false)}
        style={{marginLeft:'10px',marginRight:'10px'}}
      >
        No
       </Button> */}
            </div>
          </DialogContent>
          <DialogActions>
            
            <Button className={classes.button} onClick={handleModalClose} >
              Close
            </Button>
          </DialogActions>
        </Dialog>
  </div>
  );
}
