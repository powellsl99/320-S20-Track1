import React, { Component } from "react";
// import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import Faqs from "../components/Faqs";
import Header from "../Navigation/appbar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqList: [],
      isLoaded: false,
    };
  }

  // state = {
  //   faqList: [
  //     {
  //       id: 1,
  //       question: "Where do I find my profile?",
  //       answer: "Click profile",
  //     },
  //     {
  //       id: 2,
  //       question: "Where do I find my appointments?",
  //       answer: "Click my appointments",
  //     },
  //     {
  //       id: 3,
  //       question: "How do I logout?",
  //       answer: "Click logout",
  //     },
  //     {
  //       id: 4,
  //       question: "How do I login?",
  //       answer: "Click login",
  //     },
  //     {
  //       id: 5,
  //       question: "What is my birthday?",
  //       answer: "Check your profile",
  //     },
  //     {
  //       id: 6,
  //       question: "What is the square root of 169",
  //       answer: "13",
  //     },
  //   ],
  // };

  componentDidMount() {
    fetch("https://7jdf878rej.execute-api.us-east-2.amazonaws.com/test/faq")
      .then((response) => response.json())
      .then((faqs) => {
        console.log(faqs);
        this.setState({
          faqList: faqs.body,
          isLoaded: true,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Faqs faqs={this.state.faqList} />
        </div>
      </div>
    );
  }
}

export default App;
