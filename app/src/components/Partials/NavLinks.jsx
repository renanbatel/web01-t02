import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class NavLinks extends Component {
  
  clickEvents = () => {
    const { onClickEvent } = this.props;
    onClickEvent();
  }

  render() {
    const { sections } = this.props;

    return(
      sections.map( ( section, key ) => {
        return <Button onClick={ this.clickEvents } key={ key } color="inherit" href={ `#${ section.id }` }>{ section.name }</Button>
      } )
    );
  }
}