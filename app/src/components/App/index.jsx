import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core";
import View from "./View";
import "./style.scss";

export default class extends Component {

  theme = createMuiTheme( {
    typography: {
      useNextVariants: true
    }
  } );

  render() {

    return (
      <View theme={ this.theme }/>
    );
  }
}