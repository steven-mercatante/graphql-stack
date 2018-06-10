import React, { Component } from "react";
import ToolsList from "./ToolsList";

class Section extends Component {
  render() {
    const { type, data } = this.props;
    const { name, description, tools } = data;

    return (
      <div className={`section ${type}`}>
        <h4 className="name">{name}</h4>
        <p className="description">{description}</p>
        <ToolsList type={type} tools={tools} />
      </div>
    );
  }
}

export default Section;
