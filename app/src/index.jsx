import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "typeface-roboto/";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

render( <App />, document.getElementById( "app" ) );

// For Webpack Hot Module Replacement
if( module.hot ) {
  module.hot.accept();
  // window.addEventListener( "message", () => {
  //   if ( "production" !== process.env.NODE_ENV ) {
  //     console.clear();
  //   }
  // } );
}