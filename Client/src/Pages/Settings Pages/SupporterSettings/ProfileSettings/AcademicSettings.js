import React from "react";
import {
  makeStyles,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
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
}
const AcademicInformation = (props) => {
  const classes = useStyles();
  const [college, setCollege] = React.useState("");
  const [majors, setMajors] = React.useState("");
  const [minors, setMinors] = React.useState("");
  const [grad_year, setGradYear] = React.useState("");
  return (
    <Container component="main">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Academics
        </Typography>
        <form className={classes.form}>
          <Grid container>
            <Grid xs={6}>
              <TextField
                multiple
                variant="outlined"
                margin="normal"
                fullWidth
                label="College"
                // autoFocus
                form
                className={classes.form}
                onChange={(e) => setCollege(e.target.value)}
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                multiple
                variant="outlined"
                margin="normal"
                fullWidth
                label="Majors"
                // autoFocus
                form
                className={classes.form}
                onChange={(e) => setMajors(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6}>
              <TextField
                multiple
                variant="outlined"
                margin="normal"
                fullWidth
                label="Minors"
                // autoFocus
                form
                className={classes.form}
                onChange={(e) => setMinors(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Graduation Year"
                // autoFocus
                form
                className={classes.form}
                onChange={(e) => setGradYear(e.target.value)}
              />
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
export default AcademicInformation;
