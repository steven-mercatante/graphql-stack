import React, { Component } from "react";
import "./App.css";

import Section from "./components/Section";
import toolsData from "./toolsData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <span class="pink">GraphQL</span> Stack
        </h1>
        <p className="intro">
          GraphQL is exciting, but its ecosystem can be confusing because of all
          the tools available. This chart is meant to help explain the various
          tools and how they fit in to the overall ecosystem.
        </p>
        <div className="sectionsList">
          <div className="line" />
          {Object.entries(toolsData).map(([type, data], i) => (
            <Section type={type} data={data} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
