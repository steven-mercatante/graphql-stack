import React, { Component } from "react";
import Tool from "./Tool";

const extractLanguages = tools =>
  tools.reduce((acc, { language }) => {
    acc.add(language);
    return acc;
  }, new Set());

const sortLanguages = languages => Array.from(languages).sort();

class ToolsList extends Component {
  state = {
    language: "javascript"
  };

  render() {
    const { type } = this.props;
    let { tools } = this.props;

    if (type === "graphqlServer") {
      const languages = sortLanguages(extractLanguages(tools));
      tools = tools.filter(({ language }) => language === this.state.language);
    }

    return (
      <div className="toolsList">
        {tools.map((data, i) => <Tool data={data} key={i} />)}
      </div>
    );
  }
}

export default ToolsList;
