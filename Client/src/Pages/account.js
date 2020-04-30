import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Topics from "../components/topics.js";
import Tags from "../components/tags.js";

//import { DropzoneDialog } from "material-ui-dropzone";

export default function StudentSettings() {
  const majors = [
    "Accounting",
    "Afro-American Studies",
    "Animal Science",
    "Anthropology",
    "Arboriculture & Community Forest Management (Associate’s)",
    "Architecture",
    "Art (B.A.) ",
    "Art (B.F.A.) ",
    "Art Education",
    "Art History",
    "Astronomy (B.A.) ",
    "Astronomy (B.S.) ",
    "Bachelor's Degree with Individual Concentration (BDIC) (B.A.) ",
    "Bachelor's Degree with Individual Concentration (BDIC) (B.S.) ",
    "Biochemistry and Molecular Biology (B.A.) ",
    "Biochemistry and Molecular Biology (B.S.) ",
    "Biology (B.A.) ",
    "Biology (B.S.) ",
    "Biomedical Engineering",
    "Building & Construction Technology",
    "Chemical Engineering",
    "Chemistry",
    "Chinese Language & Literature",
    "Civil Engineering",
    "Classics",
    "Classics and Philosophy",
    "Communication",
    "Communication Disorders",
    "Comparative Literature",
    "Computer Science (B.A.) ",
    "Computer Science (B.S.) ",
    "Computer Systems Engineering",
    "Dance (B.A.) ",
    "Dance (B.F.A.) ",
    "Earth Systems",
    "Economics",
    "Education",
    "Electrical Engineering",
    "English",
    "Environmental Science",
    "Equine Concentration",
    "Finance",
    "Food Science",
    "French & Francophone Studies",
    "Geography (B.A.) ",
    "Geography (B.S.) ",
    "Geology (B.A.) ",
    "Geology (B.S.) ",
    "German and Scandinavian Studies",
    "History",
    "Horticulture Science (Associate’s) ",
    "Horticulture Science (B.S.) ",
    "Hospitality & Tourism Management",
    "Industrial Engineering",
    "Informatics",
    "Italian Studies",
    "Japanese Language & Literature",
    "Journalism",
    "Judaic Studies",
    "Kinesiology",
    "Landscape Architecture",
    "Landscape Contracting (Associate's) ",
    "Legal Studies",
    "Linguistics",
    "Linguistics and Anthropology",
    "Linguistics and Chinese",
    "Linguistics and German",
    "Linguistics and Japanese",
    "Linguistics and Philosophy",
    "Linguistics and Portuguese",
    "Linguistics and Psychology",
    "Linguistics and Russian",
    "Linguistics and Spanish",
    "Management",
    "Marketing",
    "Mathematics (B.A.) ",
    "Mathematics (B.S.) ",
    "Mechanical Engineering",
    "Microbiology (B.A.) ",
    "Microbiology (B.S.) ",
    "Middle Eastern Studies",
    "Music (B.A.) ",
    "Music (B.Mus.) ",
    "Natural Resources Conservation",
    "Nursing",
    "Nutrition",
    "Operations and Information Management",
    "Philosophy",
    "Physics (B.A.) ",
    "Physics (B.S.) ",
    "Plant & Soil Science",
    "Political Science",
    "Portuguese",
    "Pre-Medical/Pre-Health",
    "Pre-Veterinary",
    "Psychology (B.A.) ",
    "Psychology (B.S.) ",
    "Public Health Sciences",
    "Resource Economics",
    "Russian and East European Studies",
    "Science (B.S.) ",
    "Social Thought and Political Economy",
    "Sociology",
    "Spanish",
    "Sport Management",
    "Sustainable Community Development",
    "Sustainable Food and Farming (Associate's) ",
    "Sustainable Food and Farming (B.S.) ",
    "Theater",
    "Turfgrass Management (Associate's) ",
    "Turfgrass Science and Management",
    "University Without Walls (B.A.) ",
    "University Without Walls (B.S.) ",
    "Women, Gender, Sexuality Studies",
  ];
  const gradYears = ["2021", "2022", "2023", "2024"];

  const minors = [
    "Aerospace Studies",
    "Afro-American Studies",
    "Anthropology",
    "Arabic Language",
    "Architecture",
    "Art (B.A.)",
    "Art (B.F.A.)",
    "Art History",
    "Astronomy",
    "Biochemistry and Molecular Biology (B.A.)",
    "Biochemistry and Molecular Biology (B.S.)",
    "Biology (B.A.)",
    "Biology (B.S.)",
    "Building & Construction Technology",
    "Catalan Studies",
    "Chemistry",
    "Chinese",
    "Classical Civilization",
    "Comparative Literature",
    "Computer Science (B.A.)",
    "Computer Science (B.S.)",
    "Economics",
    "Education",
    "Engineering Management",
    "English",
    "Entomology",
    "Environmental Science",
    "Food Science",
    "French & Francophone Studies",
    "Geography (B.A.)",
    "Geography (B.S.)",
    "Geology (B.A.)",
    "Geology (B.S.)",
    "German and Scandinavian Studies",
    "Greek",
    "Hebrew",
    "History",
    "Information Technology",
    "Italian Studies",
    "Japanese",
    "Judaic Studies",
    "Latin",
    "Latin American, Caribbean & Latino Studies",
    "Linguistics",
    "Mathematics (B.A.)",
    "Mathematics (B.S.)",
    "Microbiology (B.A.)",
    "Microbiology (B.S.)",
    "Middle Eastern Studies",
    "Military Leadership",
    "Modern European Studies",
    "Music Performance",
    "Natural Resources Conservation",
    "Philosophy",
    "Physics (B.A.)",
    "Physics (B.S.)",
    "Plant & Soil Sciences",
    "Plant Pathology",
    "Political Science",
    "Portuguese",
    "Psychology (B.A.)",
    "Psychology (B.S.)",
    "Resource Economics",
    "Russian and East European Studies",
    "Scandinavian Studies",
    "Sociology",
    "Spanish",
    "Sport Management",
    "Sustainable Community Development",
    "Wildlife & Fisheries Conservation",
    "Women, Gender, Sexuality Studies",
  ];

  const colleges = [
    "College of Education",
    "College of Engineering",
    "College of Humanities and Fine Arts",
    "College of Information and Computer Sciences",
    "College of Natural Sciences",
    "College of Nursing",
    "College of Social and Behavioral Sciences",
    "Isenberg School of Management",
    "School of Public Health and Health Sciences",
    "Stockbridge School of Agriculture",
  ];

  const [first_name, setFirstName] = useState("");
  const [preferred_name, setPreferredName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [link, setLink] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [ID, setID] = useState("");
  const [college, setCollege] = useState([]);
  const [major, setMajor] = useState([]);
  const [minor, setMinor] = useState([]);
  const [grad_year, setGradYear] = useState("");
  const [state, setState] = React.useState({
    appt_confirmation: false,
    appt_reminder: false,
    feedback: false,
  });

  const url = "";

  //useEffect(() => {
  //fetch(url)
  //.then((res) => res.json())
  //.then((json) => {
  //var info = json.body;
  // setFirstName(info.first_name);
  //setPreferredName(info.preferred_name);
  //setLastName(info.last_name);
  //setEmail(info.email);
  //setPronouns(info.pronouns);
  //setLink(info.link);
  //setPhone(info.phone);
  //setBio(info.bio);
  //setID(info.ID);
  //setCollege(info.college);
  //setMajor(info.major);
  //setMinor(info.minor);
  //setGradYear(info.grad_year);
  //setApptConfirm(info.appt_confirmation);
  //setApptRemind(info.appt_reminder);
  //setFeedback(info.feedback);
  //});
  //}, []);

  function handleSave(event) {
    event.preventDefault();
  }

  return (
    <Grid container direction="column">
      <Paper style={{ padding: 20 }}>
        <Grid Item>
          <Typography component="h1" variant="h5" color="primary">
            Your Account
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ExpansionPanel defaultExpanded="true">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>Profile Information</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <TextField
                    variant="outlined"
                    id="default"
                    fullWidth
                    label="First Name"
                    defaultValue={first_name}
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
                    defaultValue={preferred_name}
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
                    defaultValue={last_name}
                    label="Last Name"
                    required="true"
                    name="field default"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="outlined"
                    id="default"
                    fullWidth
                    label="Email Address"
                    defaultValue={email}
                    required="true"
                    name="field default"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    variant="outlined"
                    id="default"
                    fullWidth
                    defaultValue={pronouns}
                    label="Pronouns"
                    name="field default"
                    onChange={(e) => setPronouns(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="outlined"
                    id="default"
                    fullWidth
                    defaultValue={link}
                    label="LinkedIn Link:"
                    name="field default"
                    onChange={(e) => setLink(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    variant="outlined"
                    id="default"
                    fullWidth
                    defaultValue={phone}
                    label="Phone Number"
                    name="field default"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                <Button
                  variant="contained"
                  component="label"
                  color="secondary"
                  size="small"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Resume
                  <input
                    type="file"
                    color="primary"
                    margin="dense"
                    style={{ display: "none", color: "primary" }}
                  />
                </Button>
                <Grid item xs={8}>
                  <TextField
                    variant="outlined"
                    id="default"
                    fullWidth="true"
                    multiline
                    defaultValue={bio}
                    rows="5"
                    label="Personal Biography"
                    name="field default"
                    onChange={(e) => setBio(e.target.value)}
                  />
                </Grid>
                upload photo and resume here
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography> Academics</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <Autocomplete
                    multiple
                    id="all-colleges"
                    options={colleges}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        defaultValue={college}
                        variant="outlined"
                        label="Colleges"
                      />
                    )}
                    onChange={(e, v) => setCollege(v)}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Autocomplete
                    multiple
                    id="all-majors"
                    options={majors}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        defaultValue={major}
                        variant="outlined"
                        label="Majors"
                      />
                    )}
                    onChange={(e, v) => setMajor(v)}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Autocomplete
                    multiple
                    id="all-minors"
                    options={minors}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        defaultValue={minor}
                        variant="outlined"
                        label="Minors"
                      />
                    )}
                    onChange={(e, v) => setMinor(v)}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Autocomplete
                    id="all-years"
                    options={gradYears}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        defaultValue={grad_year}
                        variant="outlined"
                        label="Expected Year of Graduation"
                      />
                    )}
                    onChange={(e, v) => setGradYear(v)}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>Account Settings</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item xs={12}>
                Select the following email notifications that you prefer:
                <Grid item xs={12} spacing="12">
                  <FormControlLabel
                    value="start"
                    control={
                      <Checkbox
                        color="primary"
                        checked={state.appt_confirmation}
                      />
                    }
                    label="Appointment Confirmation"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="start"
                    control={
                      <Checkbox color="primary" checked={state.appt_reminder} />
                    }
                    label="Appointment Reminder"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="start"
                    control={
                      <Checkbox color="primary" checked={state.feedback} />
                    }
                    label="Feedback"
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth="false"
                  size="large"
                >
                  Become a Supporter
                </Button>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Paper>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth="false"
          size="large"
          onClick={handleSave}
          alignContent="center"
        >
          Save Changes
        </Button>
      </Grid>
    </Grid>
  );
}
