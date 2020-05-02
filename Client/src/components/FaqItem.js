import React, { Component } from "react";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropTypes from "prop-types";

export class FaqItem extends Component {
  getStyle = () => {
    return {
      background: "#ffffff",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { question, answer } = this.props.faq;
    return (
      <div style={this.getStyle()}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography component="h1" variant="h5">
              {question}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component="p" variant="p">
              {answer}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* <Grid container direction="column" justify="center" alignItems="center">
          <h2>{question}</h2>
          <p>{answer}</p>
        </Grid> */}
      </div>
    );
  }
}

// PropTypes
FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

//Example for a constant
// const itemStyle = {
//   backgroundColor: "#f4f4f4"
// };

export default FaqItem;
