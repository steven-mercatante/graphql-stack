import React, { Component } from "react";
import Tool from "./Tool";

class ToolsList extends Component {
  render() {
    const { tools } = this.props;

    return (
      <div className="toolsList">
        {tools.map((data, i) => <Tool data={data} key={i} />)}
      </div>
    );
  }
}

export default ToolsList;
