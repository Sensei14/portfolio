import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";

function App() {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(0, -200px)" },
    enter: { opacity: 1, transform: "translate(0, 0)" },
    leave: { opacity: 0, transform: "translate(0, 250px)" }
  });

  return (
    <div className="App">
      <Navbar />
      <div>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
