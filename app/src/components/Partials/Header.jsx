import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar, Hidden, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavLinks from "./NavLinks";

const styles = createStyles( {
  logo: {
    display: "inline",
    cursor: "pointer"
  },
  logoWrapper: {
    flexGrow: 1
  },
  drawerWrapper: {
    display: "flex",
    flexDirection: "column",
    width: 240,
    paddingTop: "1.2rem",
    textAlign: "left"
  }
} );

class Header extends Component {

  state = {
    drawerIsOpen: false
  }

  toogleDrawer = () => {
    this.setState( {
      drawerIsOpen: this.state.drawerIsOpen ? false : true
    } );
  }
  
  render() {
    const { config, sections, classes } = this.props;

    return (
      <AppBar>
        <div className="container">

          <Toolbar>
            <div className={ classes.logoWrapper }>
              <Typography className={ classes.logo } component="span" variant="h6" color="inherit">Renan Batel</Typography>
            </div>
            <Hidden smDown>
              <NavLinks sections={ sections }/>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={ this.toogleDrawer } color="inherit" aria-label="menu">
                <MenuIcon></MenuIcon>
              </IconButton>
              <Drawer anchor="right" open={ this.state.drawerIsOpen } onClose={ this.toogleDrawer }>
                <div className={ classes.drawerWrapper }>
                  <NavLinks onClickEvent={ this.toogleDrawer } sections={ sections }/>
                </div>
              </Drawer>
            </Hidden>
          </Toolbar>
          
        </div>
      </AppBar>
    );
  }
}

Header.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles( styles )( Header );