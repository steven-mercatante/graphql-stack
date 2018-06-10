import React, { Component } from "react";
import "./App.css";

import Section from "./components/Section";
import toolsData from "./toolsData";

import graphqlLogo from "./graphql-logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          The <img src={graphqlLogo} className="graphqlLogo" />
          <span class="pink">GraphQL</span> Stack
        </h1>
        <p className="intro">
          GraphQL is exciting, but its ecosystem can be confusing because of all
          the tools available. This chart is meant to help explain the various
          tools and how they fit in to the overall ecosystem.
        </p>
        <h3>In case you don't know what GraphQL is...</h3>
        <p className="explanation">
          GraphQL is a query language for APIs and a runtime for fulfilling
          those queries with your existing data. GraphQL provides a complete and
          understandable description of the data in your API, gives clients the
          power to ask for exactly what they need and nothing more, makes it
          easier to evolve APIs over time, and enables powerful developer tools.
        </p>
        <p className="credit">
          - <a href="https://graphql.org/">Official GraphQL site</a>
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
