import React, { Component } from "react";
import "./App.css";

import Section from "./components/Section";
import toolsData from "./toolsData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="intro">
          GraphQL is exciting, but its ecosystem can be confusing because of all
          the tools available. This chart is meant to help explain the various
          tools and how they fit in to the overall ecosystem.
        </p>
        {Object.entries(toolsData).map(([type, data], i) => (
          <Section type={type} data={data} key={i} />
        ))}
      </div>
    );
  }
}

export default App;
