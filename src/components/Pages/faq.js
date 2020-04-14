import React, { Component } from "react";
// import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import Faqs from "./components/Faqs";
import "./App.css";

class App extends Component {
  state = {
    faqs: [
      {
        id: 1,
        question: "Where do I find my profile?",
        answer: "Click profile",
      },
      {
        id: 2,
        question: "Where do I find my appointments?",
        answer: "Click my appointments",
      },
      {
        id: 3,
        question: "How do I logout?",
        answer: "Click logout",
      },
      {
        id: 4,
        question: "How do I login?",
        answer: "Click login",
      },
      {
        id: 5,
        question: "What is my birthday?",
        answer: "Check your profile",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Faqs faqs={this.state.faqs} />
        </div>
      </div>
    );
  }
}

export default App;
