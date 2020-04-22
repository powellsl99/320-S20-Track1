import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import Topics from "../components/topics.js"
import Tags from "../components/tags.js"



export default function AdminSettings() {
  const fieldDefaults = [
    'A',
    'B',
    'C',
    'D'
  ]

  const users = [
    'UserA',
    'UserB'
  ]

  const blockedUsers = [
    'UserC',
    'UserD'
  ]

  const dummySupporters = [
    {
      name:"Chinmay Patil",
      tags: ["React", "Machine Learning","iOS","React", "C++","HTML","CSS", "x86 Assembly","320","Project Managing", "UI Design","UX Design","Natrual Language Processing", "Typography","OSX","Vim", "Git","Angular"],
      topics: ["Mock Interview","Resume Review","Job Search","Cover Letter"],
    },
    {
      name:"Dhruvil Gala",
      tags: ["AWS", "Microsoft","Algorithms","AWS"],
      topics: ["Mock Interview","Resume Review","Cover Letter","Job Search"],
    },
    {
      name:"Brian Krusell",
      tags: ["Industry", "Networking"],
      topics: ["Resume Review","Job Search","Cover Letter"],
    },
    {
      name:"Sam the Minuteman",
      tags: ["Basketball", "Hockey","Football"],
      topics: ["Hype","Giving Pizza"],
    }
  ]

  const [curField, setCurrField] = useState("");
  const [newDefault, setNewDefault] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [addTopic, setAddTopic] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [addTag, setAddTag] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedBlockedUser, setSelectedBlockedUser] = useState("");
  const [selectedSupporterTopics, setSelectedSupporterTopics] = useState([]);

  function handleTopics(v){
    if (v == null){
      setSelectedSupporterTopics([])
    }else{
      setSelectedSupporterTopics(v.topics)
    }
  }

  return (
    // <Container component="main" maxWidth="xs" align="center">
    //   <Typography component="h1" variant="h5" align="center">
    //     Admin Settings
    //   </Typography>
    // </Container>

    <Grid container direction="column">
      <Paper style={{padding:20}}>
        <Grid Item>
          <Typography component="h1" variant="h5" color="primary">
              Admin Settings
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>
                Field Defaults
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Autocomplete
                    id="field-defaults"
                    options= {fieldDefaults}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select a Field"
                      />
                    )}
                    onChange={(e,v) => setCurrField(v)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    variant="outlined"
                    id="default"
                    fullWidth
                    label="Set default:"
                    name="field default"
                    onChange={e => setNewDefault(e.target.value)}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Button variant='contained' color='primary' size='large'>
                    Set
                  </Button>
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
              <Typography>
                Supporter Topics
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container direction='column'>
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
                <Grid container spacing={1}>
                  <Grid item xs={3} align="center">
                    <br/>
                    <Autocomplete
                      id="supporters"
                      options= {dummySupporters}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Select a Supporter"
                        />
                      )}
                      onChange={(e,v) => handleTopics(v)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                  <br/>
                    <Autocomplete
                      id="supporters"
                      options= {selectedSupporterTopics}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Select Supporter's Topic"
                        />
                      )}
                    />
                  </Grid>
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
              <Typography>
                Help Needed Tags
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>
                Block/Unblock User
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Autocomplete
                    id="users"
                    options= {users}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Users"
                      />
                    )}
                    onChange={(e,v) => setSelectedUser(v)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant='contained' color='primary' size='large'>
                    Block user
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Autocomplete
                    id="blocked users"
                    options= {blockedUsers}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Blocked Users"
                      />
                    )}
                    onChange={(e,v) => setSelectedBlockedUser(v)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant='contained' color='primary' size='large'>
                    Unblock user
                  </Button>
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
              <Typography>
                Download Data
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              TODO
            </ExpansionPanelDetails>
          </ExpansionPanel>            
        </Grid>
      </Paper>
    </Grid>

  );
}
