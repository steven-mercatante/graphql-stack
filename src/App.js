import React, { Component } from "react";
import "./App.css";

import Section from "./components/Section";
import StaticSection from "./components/StaticSection";
import toolsData from "./toolsData";

import graphqlLogo from "./graphql-logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>
            The{" "}
            <img src={graphqlLogo} alt="GraphQL logo" className="graphqlLogo" />
            <span className="pink">GraphQL</span> Stack
          </h1>
          <p className="intro">
            GraphQL is exciting, but its ecosystem can be confusing because of
            all the tools available. This chart is meant to help explain the
            various tools and how they fit in to the overall ecosystem.
          </p>
          <h3>In case you don't know what GraphQL is...</h3>
          <p className="explanation">
            GraphQL is a query language for APIs and a runtime for fulfilling
            those queries with your existing data. GraphQL provides a complete
            and understandable description of the data in your API, gives
            clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful
            developer tools.
          </p>
          - <a href="https://graphql.org/">Official GraphQL site</a>
        </header>
        <div className="sectionsList">
          <div className="line" />
          <Section type="client" data={toolsData["client"]} />
          <Section type="gateway" data={toolsData["gateway"]} />
          <Section type="graphqlServer" data={toolsData["graphqlServer"]} />
          <StaticSection type="server" name="Servers">
            {() => (
              <div>
                <p>
                  This is where the business logic (e.g. user authentication,
                  data processing) for your app traditionally lives. Common
                  examples are Express apps, Django apps, Laravel apps, etc.
                  They may also provide RESTful API endpoints (there's nothing
                  saying you can't use GraphQL and REST in the same system.)
                </p>
              </div>
            )}
          </StaticSection>
          <Section type="dbProxy" data={toolsData["dbProxy"]} />
          <StaticSection type="data" name="Data">
            {() => (
              <div>
                <p>
                  The data layer may contain any of: one or more databases, flat
                  files and even other APIs.
                </p>
              </div>
            )}
          </StaticSection>
        </div>
        <footer>
          <p>
            If you'd like to add a tool to this chart,{" "}
            <a href="https://github.com/steven-mercatante/graphql-stack">
              submit a PR
            </a>.
          </p>
          <p>
            Made by <a href="https://twitter.com/mercatante">@mercatante</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
