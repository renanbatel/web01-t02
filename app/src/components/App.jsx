import React, { Component } from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Main from "./Sections/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import config from "../assets/config";
import "./App.scss";

class App extends Component {

  render() {
    
    return (
      <React.Fragment>
        <CssBaseline />

        <Header config={ config.header } sections={ config.sections }/>
        <Main sections={ config.sections }/>
        <Footer />

      </React.Fragment>
    );
  }
}

export default App;