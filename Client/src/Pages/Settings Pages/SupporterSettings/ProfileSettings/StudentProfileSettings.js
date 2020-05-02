import React, { useState, useEffect } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";

import {
  makeStyles,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    align: "center",
    padding: 4,
  },
  button: {
    width: "100%",
    marginTop: theme.spacing(2),
    align: "center",
  },
}));

function handleSubmit() {
  //TODO
  // PATCH to the resource id = 1
  // update that task is completed
  fetch(
    "https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/users/students/%7Bid%7D",
    {
      method: "PATCH",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
  /* will return
  {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": true
  }
  */
}

const ProfileInformation = (props) => {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [prefName, setPrefName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [pronouns, setPronouns] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [linkedinLink, setLink] = React.useState("");
  const [avatar, setAvatar] = React.useState(
    "https://www.cics.umass.edu/sites/default/files/styles/people_individual/public/headshots/img_4695_copy.jpg?itok=jwwJF0KP"
  );
  const url =
    "https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/users/students/%7Bid%7D";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        var info = json.body;

        setFirstName(info.first_name);
        setPrefName(info.preferred_name);
        setLastName(info.last_name);
        setPronouns(info.pronouns);
        setPhoneNumber(info.phone);
        setEmail(info.email);
        setBio(info.bio);
        setLink(info.link);
      });
  }, []);

  function handleDrop(dropped) {
    setAvatar({ image: dropped[0] });
  }

  function handleNewImage(e) {
    setAvatar({ image: e.target.files[0] });
  }

  return (
    <Container component="main">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Account Settings
        </Typography>
        <AvatarEditor
          image={avatar}
          width={200}
          height={200}
          borderRadius={200}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
        />
        <input name="newImage" type="file" onChange={handleNewImage} />

        <form className={classes.form}>
          <Grid container>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                defaultValue={firstName}
                label="First Name"
                form
                className={classes.form}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={prefName}
                label="Preferred Name"
                form
                className={classes.form}
                onChange={(e) => setPrefName(e.target.value)}
              />
            </Grid>
            <Grid xs={4}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                defaultValue={lastName}
                label="Last Name"
                form
                className={classes.form}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={pronouns}
                label="Pronouns"
                form
                className={classes.form}
                onChange={(e) => setPronouns(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                defaultValue={email}
                label="Email Address"
                form
                className={classes.form}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={phoneNumber}
                label="Phone Number"
                form
                className={classes.form}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={bio}
                label="Personal Biography"
                multiline
                rows={4}
                form
                className={classes.form}
                onChange={(e) => setBio(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={linkedinLink}
                label="LinkedIn Link"
                form
                className={classes.form}
                onChange={(e) => setLink(e.target.value)}
              />
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
          </Grid>

          <Button
            margin="normal"
            form
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ProfileInformation;
