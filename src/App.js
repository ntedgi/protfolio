import React from "react";

import Home from './components/home'
import MediaQuery from 'react-responsive'
import ResponsiveAPP from './phone'
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