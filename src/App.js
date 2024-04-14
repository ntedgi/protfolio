import React from "react";

import ResponsiveAPP from './phone/components/home'
import Home from './wide-screen/components/home'

import MediaQuery from 'react-responsive'
const AppWrapper = () => {
  return (
    <div className="app">
      <MediaQuery minWidth={1024}>
        <Home />
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <ResponsiveAPP />
      </MediaQuery>
    </div>
  );
};

export default AppWrapper;