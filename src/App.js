import React from "react";
import {
  HashRouter as Router,
  useRoutes,
} from "react-router-dom";
import Home from './components/home'
import Projects from './components/projects'



const App = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;