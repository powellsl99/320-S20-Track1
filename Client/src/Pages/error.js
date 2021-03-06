import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Error() {
  return (
    <Container component="main" maxWidth="xs" align="center">
      <Typography component="h1" variant="h5" align="center">
        We have encountered an error
      </Typography>
    </Container>
  );
}