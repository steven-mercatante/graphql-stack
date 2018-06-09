import React, { Component } from "react";
import "./App.css";

import toolsData from "./toolsData";

class Section extends Component {
  render() {
    const { type, data } = this.props;
    const { name, description, tools } = data;

    return (
      <div className={`section ${type}`}>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <div className="toolsList">
          {tools.map((data, i) => <Tool data={data} key={i} />)}
        </div>
      </div>
    );
  }
}

class Tool extends Component {
  render() {
    const { name, description, url, github } = this.props.data;
    return (
      <div className="tool">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p className="url">{url}</p>
        <p className="github">{github}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="description">
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
