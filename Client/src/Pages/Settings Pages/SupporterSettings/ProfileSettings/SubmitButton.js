import React , {useEffect} from "react"
import {makeStyles, Typography, Button, Container, CircularProgress, TextField, Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
      width: "100%",
      marginTop: theme.spacing(2),
      align: "center",
    }
}));


const ProfileInformation = (props) => {
    const classes=useStyles();
    const {firstName,prefName,lastName,pronouns,phoneNumber,email,linkedIn,bio} = props
    console.log(linkedIn)
    function handleSubmit(){
        fetch(
            "https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/users/supporters/27",
            {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "preferred_name": prefName,
                "bio": bio,
                "pronouns": pronouns,
                "phone": phoneNumber,
                "links": [["LinkedIn",linkedIn]],
                "notification_preferences": [],
                "tags": [],
                "major_preferences": [],
                "minor_preferences": [],
                "supporter_types": []
              })
            }
          )
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
              console.log(response)
              return response.json();
            } else {
              throw new Error("Server can't be reached!");
            }
          })
          .then(json => {
            window.location.reload()
          })
          .catch(error => {
            console.log(error);
          });
    }
    


    
    return (
        <Button
            margin="normal"
            form className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
        >
            Save
        </Button>
    );
}

export default ProfileInformation;